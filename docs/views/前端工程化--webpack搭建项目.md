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
# 前端工程化--webpack搭建项目

今天我们来详细学习前端工程化的利器---webpack。webpack是一个前端资源加载（打包）工具。它可以根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。我们以前开发一个前端项目引入很多包（依赖）例如：booystrap,bable等等我们需要用到的一些插件，而现在有了webpack之后我们可以只需要引用webpack打包好的一个文件（bundle.js）即可让我们的项目引入所有的依赖（包），不仅杜绝了加载包的二次请求而且无需考虑依赖与依赖之间互相依赖的关系，现在是不是感觉有点绕了，接下来就让我们进入webpack的学习上面吧！

## npm的 作用

在进行webpack的学习之前我们必须先翻过npm这座小山丘才能进行接下来的学习。但是npm还有两个孪生兄弟cnpm和nrm，下面先让我们看看他们这三兄弟各自有什么作用吧。

### npm、cnpm、nrm三兄弟异同

- npm
  - npm是node.js的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）
- cnpm
  - cnpm其实就是npm的一个衍生，因为npm是一个全球通用的包管理器，所以npm的默认下载地址是在国外的服务器上，这样就会导致我们在下载包的时候会有些慢。这样我们中国人就自己创建了一个cnpm的管理工具（其实就是将npm上的包全部拷贝到cnpm的服务器上），这样我们在下载包的时候链接的就是国内的服务器，这样下载的速度就会快很多。
- nrm
  - nrm是npm镜像源管理工具，其实就是用于管理我们从哪个地址上面下载的，nrm有国际上几个常用的下载地址，包括我国的也让收录了进去。

**综上：cnpm和nrm都是npm衍生出来的 东西，也就是我们只需要使用npm即可，但是npm的下载镜像源是国外的服务器，那么我们需要将npm的默认镜像源改为国内镜像源（淘宝镜像源）即可**

**npm get registry   查看目前npm的镜像源**

**npm config set registry https://registry.npm.taobao.org   将npm的镜像源更改为淘宝镜像源**

那么你现在可能会有疑问，通过npm下载的包是通过包名来下载的，那这样不会下载同名吗？这你大可放心，在npm上面发布的包的名称都是唯一的，这也就保证了我们在使用npm下载包的时候只需要知道这个包名即可。这也就导致有些程序员会在npm上抢注包名。

[点击链接查看如何在npm上发布所有自己的包](https://www.cnblogs.com/cangqinglang/p/10267193.html)

### -D  -S  -g 三兄弟异同

学习了过了npm、cnpm、nrm三兄弟之间的异同，现在还有 -D，-S，-g 安装三兄弟，现在让我们先看看安装三兄弟之间的区别

- npm  install  module_name  -S
  - 将包名引入到dependencies中
  - 通过该方式安装的包仅在开发过程中需要使用到，使用webpack打完包之后再生产环境中用不到（例如：sass-loader,babel-loader等等）
- npm  install  module_name  -D
  - 将包名引入到devDependencies中
  - 通过该方式安装的包不仅在开发过程中需要用到，在生产环境中也需要用到（例如：axios、element-ui、vue-router）
- npm  install  module_name  -g
  - 将包在电脑上进行全局引入

[-D、-S、-g讲解](https://www.jianshu.com/p/146aebc394fd)

## yarm(npm的升级，之后有时间进行尝试)

## 

学习过程--------------------------------------------------------------------------------------------



1. 先安装webpack和webpack-cli
2. 再安装style-loader和css-loader
3. 安装webpack-dev-server         webpack-dev-server是为了方便开发，因为如果没有这个库的话每次编译完成代码都需要重新打包，而如果使用这个库的话
4. 安装file-loader和url-loader   （**Ps：在这里url-loader底层会调用file-loader**）
5. 我们可以在package.json   的"scripts"  中封装比较长的命令
   - "dev":".\\node_modules\\.bin\\webpack-dev-server.cmd"



**启动webpack-dev-server的时候有一个坑：一定要在项目的根路径运行    .\node_modules\\.bin\webpack-dev-server.cmd   这个命令，因为你在哪个路径下面运行这个命令，哪个路径就是你的根目录**

**项目名称一定不要叫vue，如果你叫vue再npm  i  vue会报错，因为你的项目也是一个包了**