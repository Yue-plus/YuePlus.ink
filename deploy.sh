#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
echo 'note.yueplus.ink' > CNAME

git config --global user.name "yue-plus"
git config --global user.email Yue_plus@foxmail.com

git init
git add -A
git commit -m 'deploy'

GITHUBURL=https://${ACCESS_TOKEN}@github.com/Yue-plus/YuePlus.ink.git

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f $GITHUBURL master:gh-pages

cd -