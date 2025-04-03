// README結合ツール
// このスクリプトはカレントディレクトリとそのサブディレクトリから全てのREADMEファイルを見つけて結合します
// 使用方法: deno run --allow-read --allow-write combine_readmes.ts

import { walk } from "https://deno.land/std/fs/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";

// 結合したREADMEを保存するファイル名
const OUTPUT_FILE = "COMBINED_README.md";
// READMEとして認識するファイル名パターン (大文字小文字を区別しない)
const README_PATTERNS = ["readme.md", "readme.txt", "readme"];

async function combineReadmes() {
  console.log("サブディレクトリからREADMEファイルを検索中...");
  
  // 結合されたコンテンツを保存する配列
  const combinedContent: string[] = [];
  // 見つかったREADMEファイルの数
  let fileCount = 0;
  
  // ファイルシステムをウォークしてREADMEファイルを見つける
  for await (const entry of walk(".", {
    includeDirs: false,
    includeFiles: true,
    exts: ["md", "txt", ""],
  })) {
    const filename = path.basename(entry.path).toLowerCase();
    
    // README形式のファイルかチェック
    if (README_PATTERNS.includes(filename)) {
      try {
        // ファイルの内容を読み込む
        const content = await Deno.readTextFile(entry.path);
        
        // ヘッダーを追加してから、コードブロックでコンテンツを追加
        combinedContent.push(
          `\n\n## ${entry.path}\n\n\`\`\`\n${content}\n\`\`\``
        );
        
        fileCount++;
        console.log(`読み込み成功: ${entry.path}`);
      } catch (error) {
        console.error(`エラー: ${entry.path} の読み込みに失敗しました`, error);
      }
    }
  }
  
  // 何もファイルが見つからなかった場合
  if (fileCount === 0) {
    console.log("READMEファイルが見つかりませんでした。");
    return;
  }
  
  // ヘッダーを追加
  const header = `# 結合されたREADMEファイル

このファイルは ${new Date().toLocaleString()} に生成され、${fileCount} 個のREADMEファイルが含まれています。

`;

  // 最終的な内容を作成
  const finalContent = header + combinedContent.join("");
  
  // 結果をファイルに書き込む
  try {
    await Deno.writeTextFile(OUTPUT_FILE, finalContent);
    console.log(`成功: ${fileCount} 個のREADMEファイルが ${OUTPUT_FILE} に結合されました。`);
  } catch (error) {
    console.error(`エラー: ${OUTPUT_FILE} への書き込みに失敗しました`, error);
  }
}

// メイン関数を実行
combineReadmes();
