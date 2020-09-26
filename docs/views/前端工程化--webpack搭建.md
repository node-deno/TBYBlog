---
title: webpack
date: 2020-09-16
categories:
 - 前端面试
tags:
 - webpack

---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

# webpack前世今生

# npm install  -D  -S  -g 之间的区别

- -D
  - 生产环境不需要的
  - devDependencies
- -S
  - 生产环境需要的
  - dependencies
- -g
  - 全局安装

## 更改npm的镜像源

- **npm get registry**   查看目前npm的镜像源
- **npm config set registry https://registry.npm.taobao.org**    将npm的镜像源更改为淘宝镜像源

## 使用webpack不仅可以解决这个包之间的依赖，还可以解决二次请求的问题



1. 先安装webpack和webpack-cli
2. 再安装style-loader和css-loader
3. 安装webpack-dev-server         webpack-dev-server是为了方便开发，因为如果没有这个库的话每次编译完成代码都需要重新打包，而如果使用这个库的话
4. 安装file-loader和url-loader   （**Ps：在这里url-loader底层会调用file-loader**）
5. 我们可以在package.json   的"scripts"  中封装比较长的命令
   - "dev":".\\node_modules\\.bin\\webpack-dev-server.cmd"





**启动webpack-dev-server的时候有一个坑：一定要在项目的根路径运行    .\node_modules\\.bin\webpack-dev-server.cmd   这个命令，因为你在哪个路径下面运行这个命令，哪个路径就是你的根目录**





项目名称一定不要叫vue，如果你叫vue再npm  i  vue会报错，因为你的项目也是一个包了