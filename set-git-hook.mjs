// Linuxコマンドを含むので、Windowsだと多分動かない
await $`npx rimraf .git/hooks/commit-msg` // 既存Hooksの削除
await $`git config --local core.hooksPath .githook` // Hooksフォルダの登録
await $`git init` // カスタムHooksをリポジトリ設定に反映
await $`chmod +x .githook/commit-msg` // カスタムHooksに実行権限を付与
