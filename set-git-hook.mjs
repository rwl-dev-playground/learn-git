// こんなにいらないかも
const hooksPath = (await nothrow($`git config --local core.hooksPath`)).stdout;

await $`npx rimraf .git/hooks/commit-msg`; // 既存Hooksの削除
if (hooksPath !== ".githook\n") await $`git config --local core.hooksPath .githook` // Hooksフォルダの登録
await $`git init` // カスタムHooksをリポジトリ設定に反映
console.log(`${chalk.green('SUCCESS')} Command Complete!!`);
