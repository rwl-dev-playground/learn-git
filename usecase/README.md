# 逆引きGit利用例
## リポジトリをGitHubからローカルに持ってきたい
``` bash
git clone https://github.com/windchime-yk/learn-git.git
```

### 余談
GitHub CLIでもcloneできます。
``` bash
gh repo clone windchime-yk/learn-git
```

## ローカルのフォルダをGit管理にしてGitHubにあげたい
``` bash
git init
git add .
git commit -m "feat: first commit"
git push origin main
```

### 余談
GitHub上にリポジトリがない場合、GitHub CLIで新規作成できます。

``` bash
git repo create
```

## Gitコミットログを綺麗にしてPRを出したい
``` bash
# 以前のコミットにまとめたいファイルをGitに登録
git add <target file>

# まとめ先のコミットを指定し、`fixup!`のプレフィックスのついたコミットを作成する
git commit --fixup <target hash>

# まとめ先のコミットの前にあるコミットの番号を指定して、コミットをまとめる
git rebase -i --autosquash <before target hash>
```

## まだpushしていない変更と比較したい変更を比較する
pushしていない変更に不必要なものが含まれていないか確認するときに使えます。

``` bash
git diff <target hash> --staged
```
