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

## まだpushしていない変更と比較したい変更を比較したい
pushしていない変更に不必要なものが含まれていないか確認するときに使えます。

``` bash
git diff <target hash> --staged
```

## 変更を部分的にステージングしたい
GUIみたいに部分的に変更をステージングしたい場合、以下の方法で可能です。

``` bash
git add -p <target file>
```

## 現在のディレクトリ以外の変更もすべてひっくるめてステージングしたい
`git add .`が変更済み（新規追加 / 修正 / 削除）ファイルをすべてステージングに上げるのは有名な話ですが、以下のような場合すべての変更はステージングされません。

``` bash
.
├── .git
├── dir1 ← 今ここにいる
└── dir2 ← ここにも変更がある
```

この場合、以下のコマンドでひっくるめてステージングできます。

``` bash
git add -A # git add --all
```

### 余談
`git add -p .`とやったときに、新規追加ファイル（そのときは画像でした）がステージングされませんでした。  
たぶん`--patch`だからですかね……パイナリファイルだから差分参照ができなかったからかも……（わかってない

## リファレンス
- [Gitで部分的にコミットする方法](https://qiita.com/miyohide/items/79ab0ff3b3852289a6be)
- [git add -u と git add -A と git add . の違い](https://note.nkmk.me/git-add-u-a-period/)
