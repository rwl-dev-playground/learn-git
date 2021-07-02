# Learn Git
Gitの再学習用のリポジトリ。

## Gitとは
> プログラムのソースコードなどの変更履歴を記録・追跡するための分散型バージョン管理システムである。Linuxカーネルのソースコード管理に用いるためにリーナス・トーバルズによって開発され、それ以降ほかの多くのプロジェクトで採用されている。

https://ja.wikipedia.org/wiki/Git

## 前準備
作業をする前に、GitカスタムHooksをローカルリポジトリに登録するため以下のコマンドを実行してください。
なお、Windowsには対応していません。

``` bash
npx zx set-git-hook.mjs
```

## インストール
### Windows
#### Chocolatey
``` powershell
choco install git
```
#### Scoop
``` powershell
scoop install git
```

### Mac
``` bash
$ brew install git
```

### Linux/Unix
多すぎるので[公式を参照](https://git-scm.com/download/linux)のこと

## 目次
### 基礎振り返り
- git init
- git clone
- git add
- git commit
- git push
- git fetch
- git pull
- git branch
- git checkout
  - git switch
  - git restore
- git stash
- git status
- git diff
- git cherry-pick

### 逆引き
- [リポジトリをGitHubからローカルに持ってきたい](./usecase/#リポジトリをGitHubからローカルに持ってきたい)
- [ローカルのフォルダをGit管理にしてGitHubにあげたい](./usecase/#ローカルのフォルダをGit管理にしてGitHubにあげたい)

## 参考文献
- [Git公式ドキュメント](https://git-scm.com/docs)
- [Git - Wikipedia](https://ja.wikipedia.org/wiki/Git)
- [かゆいところに手が届くgitフックスクリプト(クライアントサイド編)](https://www.unitrust.co.jp/2426)
