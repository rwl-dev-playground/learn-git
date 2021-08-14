// コード内の実行権限付与コマンドがWindowsで動作しないので、WindowsでGit Hooksが動作するかは未知数
const hooksPath = (await nothrow($`git config --local core.hooksPath`)).stdout;

await $`npx rimraf .git/hooks/commit-msg`; // 既存Hooksの削除
if (hooksPath !== ".githook\n") await $`git config --local core.hooksPath .githook` // Hooksフォルダの登録
await $`git init` // カスタムHooksをリポジトリ設定に反映
if (os.platform() === 'darwin') await $`chmod +x .githook/commit-msg` // カスタムHooksに実行権限を付与
console.log(`${chalk.green('SUCCESS')} Command Complete!!`);
