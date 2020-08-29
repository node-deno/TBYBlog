#直接点击该文件就能自动的上传发布到自己的github仓库（Ps：下面的配置我们可以根据自己的需要进行自由的配置）
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:node-deno/TBYBlog.git master:gh-pages

cd -