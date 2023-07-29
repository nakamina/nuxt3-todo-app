# TODO管理アプリ
Nuxt3 をフレームワークとして用いたタスク追加とタスクの削除ができるTODO管理アプリ

## node.js 環境の構築
- nodebrew のインストール
```shell
brew install nodebrew
```
- nodebrew を使ってnode をインストール
```shell
# 保存先のディレクトリを作成する
mkdir -p ~/.nodebrew/src

# node をインストールする
nodebrew install-binary stable

# インストールした node のバージョンを確認する
nodebrew ls
# v20.4.0
#
# current: v20.4.0
```
- nodebrew でインストールした node にPATHを通しておく
```shell
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```
- yarn をインストール
```shell
npm install -g yarn
```
## プロジェクトの新規作成 / 既存プロジェクトの編集
プロジェクトを新規作成する場合と、既存プロジェクトを編集する場合で以下のように異なる
### プロジェクトを新規作成する場合

```shell
# 作業ディレクトリへ移動する
cd /path/to/workdir

# 新規プロジェクト用の雛形を作成する
npx nuxi@latest init nuxt3-todo-app

# 作成したプロジェクトの雛形へ移動する
cd nuxt3-todo-app
```


## プロジェクトを clone してくる


```shell
# 作業ディレクトリへ移動する
cd path/to/workdir

# GitHub から clone してくる
git clone git@github.com:nakamina/
nuxt3-todo-app.git

# clone してきたレポジトリへ移動する
cd nuxt3-todo-app
 ```
## 開発体制のセットアップ
- 依存モジュールをインストールする
```shell
yarn install
```
- 開発サーバを立ち上げる
```shell
yarn dev -o
```

