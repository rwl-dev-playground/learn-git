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
