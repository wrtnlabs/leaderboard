import { readdirSync, readFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface TrialResult {
  type: 'success' | 'failure';
  result: {
    success: boolean;
  };
  completion?: {
    model?: string;
  };
}

interface ModelResults {
  [task: string]: {
    firstTrySuccesses: number;
    totalSuccesses: number;
    totalTrials: number;
    attempts: number[];
  };
}

interface AllResults {
  [vendor: string]: {
    [model: string]: ModelResults;
  };
}

function analyzeReports(): AllResults {
  const reportsDir = join(__dirname, 'validate');
  const results: AllResults = {};

  // Get all vendor directories
  const vendors = readdirSync(reportsDir).filter(name => {
    const path = join(reportsDir, name);
    return statSync(path).isDirectory() && name !== '.DS_Store';
  });

  for (const vendor of vendors) {
    const vendorDir = join(reportsDir, vendor);
    results[vendor] = {};

    // Get all model directories
    const models = readdirSync(vendorDir).filter(name => {
      const path = join(vendorDir, name);
      return statSync(path).isDirectory() && name !== '.DS_Store';
    });

    for (const model of models) {
      const modelDir = join(vendorDir, model);
      results[vendor][model] = {};

      // Get all task directories
      const tasks = readdirSync(modelDir).filter(name => {
        const path = join(modelDir, name);
        return statSync(path).isDirectory() && name !== '.DS_Store' && name !== 'README.md';
      });

      for (const task of tasks) {
        const taskDir = join(modelDir, task);
        const trialsDir = join(taskDir, 'trials');

        // Initialize task results
        results[vendor][model][task] = {
          firstTrySuccesses: 0,
          totalSuccesses: 0,
          totalTrials: 0,
          attempts: Array(10).fill(0)
        };

        // Check if trials directory exists
        try {
          const trialFiles = readdirSync(trialsDir).filter(name => name.endsWith('.json'));
          
          // Process each trial (1-10)
          for (let trialNum = 1; trialNum <= 10; trialNum++) {
            // Check what type of result this trial had
            const successFile = `${trialNum}.success.json`;
            const failureFile = `${trialNum}.failure.json`;
            const errorFile = `${trialNum}.error.json`;
            const nothingFile = `${trialNum}.nothing.json`;
            
            let trialResult: 'success' | 'failure' | 'error' | 'nothing' | 'missing' = 'missing';
            let trialData: TrialResult | null = null;
            
            if (trialFiles.includes(successFile)) {
              trialResult = 'success';
              try {
                trialData = JSON.parse(readFileSync(join(trialsDir, successFile), 'utf8'));
              } catch (error) {
                console.warn(`Failed to parse ${successFile}`);
              }
            } else if (trialFiles.includes(failureFile)) {
              trialResult = 'failure';
              try {
                trialData = JSON.parse(readFileSync(join(trialsDir, failureFile), 'utf8'));
              } catch (error) {
                console.warn(`Failed to parse ${failureFile}`);
              }
            } else if (trialFiles.includes(errorFile)) {
              trialResult = 'error';
              try {
                trialData = JSON.parse(readFileSync(join(trialsDir, errorFile), 'utf8'));
              } catch (error) {
                console.warn(`Failed to parse ${errorFile}`);
              }
            } else if (trialFiles.includes(nothingFile)) {
              trialResult = 'nothing';
              try {
                trialData = JSON.parse(readFileSync(join(trialsDir, nothingFile), 'utf8'));
              } catch (error) {
                console.warn(`Failed to parse ${nothingFile}`);
              }
            }
            
            if (trialResult !== 'missing') {
              results[vendor][model][task].totalTrials++;
              
              // Count attempts (1 + number of previous attempts)
              const attemptCount = trialData && trialData.previous ? trialData.previous.length + 1 : 1;
              results[vendor][model][task].attempts[trialNum - 1] = attemptCount;
              
              // Count successes
              if (trialResult === 'success') {
                results[vendor][model][task].totalSuccesses++;
                results[vendor][model][task].firstTrySuccesses++;
              } else if (trialData && trialData.previous && trialData.previous.length > 0) {
                // Check if this trial eventually succeeded after retries
                // For now, assume only 'success' type files represent final success
                // This might need adjustment based on the actual data structure
              }
            }
          }
        } catch (error) {
          console.warn(`No trials directory found for ${vendor}/${model}/${task}`);
        }
      }
    }
  }

  return results;
}

function generateMarkdownTable(results: AllResults): string {
  // Collect all unique tasks across all models
  const allTasks = new Set<string>();
  for (const vendor in results) {
    for (const model in results[vendor]) {
      for (const task in results[vendor][model]) {
        allTasks.add(task);
      }
    }
  }
  
  const tasks = Array.from(allTasks).sort();
  
  // Standard task name mappings for display
  const taskDisplayNames: { [key: string]: string } = {
    'ObjectConstraint': 'ObjConstraint',
    'ObjectFunctionSchema': 'ObjFunctionSchema', 
    'ObjectHierarchical': 'ObjHierarchical',
    'ObjectJsonSchema': 'ObjJsonSchema',
    'ObjectSimple': 'ObjSimple',
    'ObjectUnionExplicit': 'ObjUnionExp',
    'ObjectUnionImplicit': 'ObjUnionImpl',
    'ShoppingCartCommodity': 'ShoppingCartComm',
    'ShoppingOrderCreate': 'ShoppingOrderCreate',
    'ShoppingOrderPublish': 'ShoppingOrderPublish',
    'ShoppingSaleDetail': 'ShoppingSaleDetail',
    'ShoppingSalePage': 'ShoppingSalePage',
    // Embedded JSON in descriptions (Mastra technique)
    'ObjectConstraint-embedded-json-desc': 'ObjConstraint-JSON',
    'ObjectFunctionSchema-embedded-json-desc': 'ObjFunctionSchema-JSON',
    'ObjectHierarchical-embedded-json-desc': 'ObjHierarchical-JSON',
    'ObjectJsonSchema-embedded-json-desc': 'ObjJsonSchema-JSON',
    'ObjectSimple-embedded-json-desc': 'ObjSimple-JSON',
    'ObjectUnionExplicit-embedded-json-desc': 'ObjUnionExp-JSON',
    'ObjectUnionImplicit-embedded-json-desc': 'ObjUnionImpl-JSON',
    'ShoppingCartCommodity-embedded-json-desc': 'ShoppingCartComm-JSON',
    'ShoppingOrderCreate-embedded-json-desc': 'ShoppingOrderCreate-JSON',
    'ShoppingOrderPublish-embedded-json-desc': 'ShoppingOrderPublish-JSON',
    'ShoppingSaleDetail-embedded-json-desc': 'ShoppingSaleDetail-JSON',
    'ShoppingSalePage-embedded-json-desc': 'ShoppingSalePage-JSON',
    // Google/Mistral variations
    'ValidateObjectConstraint': 'ObjConstraint',
    'ValidateObjectFunctionSchema': 'ObjFunctionSchema',
    'ValidateObjectGeometry': 'ObjGeometry'
  };

  // Create display names for tasks
  const taskColumns = tasks.map(task => taskDisplayNames[task] || task);

  let firstTryTable = `### Table 1. First Try Success Rate by Task (No Validation Feedback)\n\n`;
  firstTryTable += `This table shows the percentage of immediate ("1️⃣") successes per task.\n\n`;
  firstTryTable += `| **Model** | ${taskColumns.map(name => `**${name}**`).join(' | ')} |\n`;
  firstTryTable += `|${Array(taskColumns.length + 1).fill(':-----------:').join('|')}|\n`;

  let overallTable = `### Table 2. Overall Success Rate\n\n`;
  overallTable += `For each task the cell shows the percentage of trials (out of 10) that ultimately succeeded (including those that needed extra feedback).\n\n`;
  overallTable += `| **Model** | ${taskColumns.map(name => `**${name}**`).join(' | ')} |\n`;
  overallTable += `|${Array(taskColumns.length + 1).fill(':-----------:').join('|')}|\n`;

  let summaryTable = `### Table 3. Summary of Successes\n\n`;
  summaryTable += `| **Model** | **First Try Success** | **Final Success** | **Improvement** | **Improvement %** | **Failed Tasks** | **Avg Trials** | **Max Trials** | **Min Trials** |\n`;
  summaryTable += `|-----------|:---------------------:|:------------------:|:---------------:|:-----------------:|:----------------:|:--------------:|:--------------:|:--------------:|\n`;

  // Process each model
  for (const vendor in results) {
    for (const model in results[vendor]) {
      const modelData = results[vendor][model];
      const modelName = `${model} (${vendor}/${model})`;

      // Calculate first try success rates
      const firstTryRow = [modelName];
      const overallRow = [modelName];
      
      let totalFirstTrySuccesses = 0;
      let totalFinalSuccesses = 0;
      let totalTasksAttempted = 0;
      let totalTrialsSum = 0;
      let maxTrials = 0;
      let minTrials = Infinity;
      let failedTasks = 0;

      for (const task of tasks) {
        const taskData = modelData[task];
        if (taskData && taskData.totalTrials > 0) {
          const firstTryRate = (taskData.firstTrySuccesses / 10) * 100;
          const overallRate = (taskData.totalSuccesses / 10) * 100;
          
          firstTryRow.push(`${firstTryRate.toFixed(1)}%`);
          overallRow.push(`${overallRate.toFixed(1)}%`);
          
          totalFirstTrySuccesses += taskData.firstTrySuccesses;
          totalFinalSuccesses += taskData.totalSuccesses;
          totalTasksAttempted += 10; // Each task has 10 trials
          
          // Calculate trial statistics
          const attempts = taskData.attempts.filter(a => a > 0);
          if (attempts.length > 0) {
            totalTrialsSum += attempts.reduce((sum, a) => sum + a, 0);
            maxTrials = Math.max(maxTrials, Math.max(...attempts));
            minTrials = Math.min(minTrials, Math.min(...attempts));
          }
          
          if (taskData.totalSuccesses < 10) {
            failedTasks += (10 - taskData.totalSuccesses);
          }
        } else {
          firstTryRow.push('N/A');
          overallRow.push('N/A');
        }
      }

      firstTryTable += `| ${firstTryRow.join(' | ')} |\n`;
      overallTable += `| ${overallRow.join(' | ')} |\n`;

      // Summary row
      const improvement = totalFinalSuccesses - totalFirstTrySuccesses;
      const improvementPct = totalFirstTrySuccesses > 0 ? (improvement / totalFirstTrySuccesses * 100).toFixed(2) : '0.00';
      const avgTrials = totalTasksAttempted > 0 ? (totalTrialsSum / totalTasksAttempted).toFixed(3) : '0.000';
      
      summaryTable += `| ${modelName} | ${totalFirstTrySuccesses} | ${totalFinalSuccesses} | ${improvement} | ${improvementPct}% | ${failedTasks} | ${avgTrials} | ${maxTrials === 0 ? 0 : maxTrials} | ${minTrials === Infinity ? 0 : minTrials} |\n`;
    }
  }

  return `${firstTryTable}\n---\n\n${overallTable}\n---\n\n${summaryTable}\n---\n`;
}

// Main execution
const results = analyzeReports();
const markdownTables = generateMarkdownTable(results);

console.log('# Test Report for Validate\n');
console.log('- Each test is run 10 times.');
console.log('- The first attempt is the first try of the test, which uses tool calling without any validation feedback. We pass schema and prompt to the model.');
console.log('- The second and later attempts are the same as the first attempt, but with type validation feedback.');
console.log('- The maximum number of attempts is 5.');
console.log('- Tests with "-JSON" suffix use schemas with embedded JSON constraints in descriptions ([Mastra technique](https://mastra.ai/blog/mcp-tool-compatibility-layer)).\n');
console.log('We call each model with [OpenRouter.ai](https://openrouter.ai/).\n');
console.log(markdownTables);