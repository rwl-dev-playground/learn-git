# `git cherry-pick`
既存のコミットを抜き出して適用します。  
いいとこ取りできる機能です。  
便利機能ではあるのですが、集団の開発だと乱用できない奥の手という雰囲気を感じました。このコマンドを使わない運用にするのが一番いいかも。

``` bash
# 現在のブランチに別ブランチの特定コミットを適用します
git cherry-pick <SHA>

# 複数指定の場合です
git cherry-pick <SHA>..<SHA>

# コミットしたくない場合です
git cherry-pick -n <SHA>..<SHA>
```

## 参考文献
- [Git公式](https://git-scm.com/docs/git-cherry-pick)
- [第10話 git cherry-pick でいいとこ取り！【連載】マンガでわかるGit ～コマンド編～](https://www.r-staffing.co.jp/engineer/entry/20200327_1)
