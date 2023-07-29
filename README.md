# TODO管理アプリ
Nuxt3をフレームワークとして用いたタスク追加とタスクの削除ができるTODO管理アプリ
# 環境構築
- nodebrewのインストール
```shell
brew install nodebrew
```
- nodebrewを使ってnodeをインストール
```shell
#保存先のディレクトリを作成する
mkdir -p ~/.nodebrew/src

#nodeをインストールする
nodebrew install-binary stable

#インストールしたnodeのバージョンを確認する
nodebrew ls
# v20.4.0

# current: v20.4.0
```
- nodebrewでインストールしたnodeにPATHを通しておく
```shell
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zshrc
sorce ~/.zshrc
```
- yarnをインストール
```shell
npm install -g yarn
```
- nuxtプロジェクトを作成
```shell
cd /path/to/workdir

npx nuxi@latest init nuxt3-todo-app

cd nuxt3-todo-app
```
- 依存モジュールをインストール
```shell
yarn install
```
- 開発サーバを立ち上げる
```shell
yarn dev -o
```

