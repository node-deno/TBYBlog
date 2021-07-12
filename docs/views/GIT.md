---
title: GIT详解
date: 2020-12-16
categories:
 - GIT
tags:
 - GIT
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。

Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。

# GIT配置


- 查看配置
  - git config --list --global(local/system)
- 配置name
  - git config --global(local/system) user.name 'you_name'
- 配置email
  - git config --global(local/system) user.email 'you_email'
- 重写name或者email
  - git config --global(local/system) --replace-all user.name(user.email) 'you_name(you_email)'
  
**config的三个作用域**

- --local    **对某个仓库生效**
- --global    **对当前用户全局生效**
- --system    **对该系统中所有的用户都生效（一般不用，因为不是符合逻辑）**

# 工作区、暂存区、版本库、远程仓库四者之间的关系

- 工作区
  - 平时存放项目代码的地方
- 暂存区
  - 用于临时存放改动的文件，事实上暂存区只是一个文件，保存即将提交到文件列表信息
- 版本库
  - 版本区（仓库区），是安全存放数据的位置，这里面有提交所有版本的数据，其中HEAD一般指向最新放入仓库的版本
- 远程仓库
  - 远程仓库，一般有Github、GitLab等。

> 四者之间关系转换

![工作区、暂存区、版本库、远程仓库关系图](https://img2018.cnblogs.com/blog/1090617/201810/1090617-20181008211557402-232838726.png)



# GIT常用命令

> 在GIT的命令中，后面加的后缀都是可以互相叠加的

- **git mv** 

  - **git mv 文件1 文件2**  对被git管理的文件进行重命名（等价于先将文件名称进行mv，再add 文件，将更名之后的文件保存至暂存区）
- **git rm ** 

  - **git rm 文件**  对被git管理的文件进行删除(等价于先将文件进行rm，再add文件，将文件删除保存至暂存区)
  - **git rm --cached 文件** 将暂存区的文件进行删除
- **git add**

  -  **git add 文件** 将文件添加至暂存区（包括没有被git管理的文件和被git管理进行了增删改的文件）
  -  使用 git add .  命令可以将所有的文件添加至暂存区
- **git log**
  - **git log --oneline** 查看当前分支日志的简洁信息
  - **git log -数字** 查看当前分支最近几次（数字）日志
  - **git log 分支名** 查看某分支日志
  - **git log --all** 查看所有分支的git日志
  - **git log --graph** 通过git图形化的方式查看日志
- **git commit**
  - **git commit -m “本次提交备注”** 将暂存区内容提交至版本库
  - **git commit -am “本次提交备注”** 将工作区内容直接提交至版本库
  - **git commit --amend** 修改最近一次提交的messgae
- **git diff**
  - **git diff** 比较暂存区与工作区之间的内容
  - **git diff 文件名** 比较暂存区与工作区的某文件
  - **git diff 分支名1  分支名2 文件名** 查看某文件在两个分支之间的差异
  - **git diff HEAD HEAD~数字** 比较当前HEAD指针指向版本库和HEAD指针指向的之前版本库进行比较
  - **git diff --cached**  比较暂存区与当前HEAD指针指向版本库比较
  - **git diff commitID1 commitID2** 查看两次提交之间的区别
- **gitk**
  - 打开当前分支GIT自带图形化工具
  - **gitk 分支名** 打开某分支GIT自带图形化工具
  - **gitk --all** 打开所有分支GIT自带图形化工具
- **git branch**

  - **git branch 分支名** 基于当前分支创建出一个新的分支
  - **git branch -d 分支名** 删除某个分支
    - 如果执行该命令时，git报了“error:The branch is not fully merged”这个错误，就表明这个分支上面做了修改，并且不曾合入到其他任何分支，git不允许删除。（PS：但是可以使用  -D   进行强行删除）
  - **git branch -D 分支名** 强行删除某个分支
  - **git branch -av** 查看本地和远端仓库的所有分支
  - **git branch -vv** 查看本地所有的分支，并且查看本地的分支与哪个远端分支相对应 （如果没有显示对应远端的分支，则说明该本地分支没有与远端分支相对应）
  - **git branch --set-upstream-to=远端仓库/远端分支  本地分支** 设置本地分支与远端分支相对应，并且该远端分支必须首先存在才能相互对应
- **git checkout**
  - **git checkout 分支名** 切换至某个分支
  - **git checkout -b 分支名** 基于当前分支创建一个新的分支，并且切换到新创建的分支
  - **git checkout 文件名** 将某个文件在工作区的内容恢复与暂存区相同
  - **git checkout *** 将工作区所有的文件恢复的与暂存区相同
  - 由于git checkout有切换分支和恢复工作区文件的作用，会给新用户造成认知负担，于是git社区有添加了git switch 和 git restore 命令来代替现在的git checkout命令
- **git switch**
  - **git switch 分支名** 切换至某个分支
  - **git switch -c  分支名** 基于当前分支创建一个新的分支，并且切换到新创建的分支 
- **git restore**
  - **git restore *** 将工作区所有的文件恢复的与暂存区相同
  - **git restore 文件名** 将工作区某个文件恢复的与暂存区相同
  - **git restore --staged  * ** 将暂存区的所有文件与HEAD保持一致（也就是说将暂存区的所有文件清空）
  - **git restore --staged 文件名* ** 将暂存区的某个文件与HEAD保持一致（也就是说将暂存区的某个文件从暂存区移出）
- **git merge**
  - **git merge 需要被合并进来的分支名** 将其他分支的内容合并进来
- **git reset**

  - **git reset 的三种模式**
  - --hard
    - **git reset --hard commitID**  撤销工作区所有未提交的修改内容，将暂存区与工作区都回到上一次版本，并删除之前提交的所有信息
    - **git reset --hard HEAD** 做出此操作是，就是将暂存区、工作区恢复为与HEAD（**HEAD一般为当前分支的最新一次提交的commitID**）保持一致

    - --mixed（默认，可以不用带该参数）  **可以在工作中用于message填写错误时，回滚至上个版本但是代码没有进行删减需要将文件先提交至暂存区再commit即可**
      - **git reset --mixed commitID**  将暂存区的文件与commit保持一致，工作区文件内容保持不变
    - --soft    **可以在工作中用于message填写错误时，回滚至上个版本但是代码没有进行删减直接再次commit即可。推荐使用这一种**
      - **git reset --soft commitID**  回退至某个版本，但是工作区的内容不变，并且只回退了commit的信息。不会对文件内容做修改，如果需要提交直接进行commit操作即可
- **git reset --hard** 清理工作区和暂存区所有的变更（**不会对未跟踪的文件做修改，例如：在工作区新增一个文件；在工作区对一个文件进行改名，改名之后的文件也为新增的文件**）
- **git stash** （如果在开发过程中进行了临时加塞，我们可以使用stash先将目前的代码暂存起来）
  - **git stash 【save  ‘保存的信息’】 ** 将现在的开发任务放在一个堆栈中进行保存,并且遵循先进后出的原则
  - **git stash list** 查看stash堆栈中的存储信息
  - **git stash apply 【数字】** 推出stash堆栈中的第N项（如果不添加数字，默认为第一项）
  - **git stash pop 【数字】** 推出stash堆栈中的第N项（如果不添加数字，默认为第一项），并且删除stash堆栈中的这个stash
  - **git stash drop 【数字】** 删除stash堆栈中的第N项（如果不添加数字，默认为第一项）
  - **git stash clear** 删除stash堆栈中的所有stash
- **git remote**
  - **git remote -v** 显示所有的远程仓库
  - **git remote add 远端仓库名称 远端仓库地址**  添加远端仓库
  - **git remote rm 远端仓库名称** 删除远端仓库
  - **git remote rm old_name new_name** 修改远端仓库名称
- **git fetch**
- **git pull** （其实是git fetch 与 git merge 合并的命令）
- **git push**
  - **git push --set-upstream 远端仓库 远端分支** 在本地创建一个新分支时，没有与远端分支相对应当前本地分支时，需要进行本地分支与远端分支对应上之后才能进行push（本次操作包含本地分支与远端分支对应，并且将本次代码push到远端分支，如果远端分支不存在还会自动的创建远端分支）

# GIT进阶命令

- **git cat-file**
  - **git cat-file -t hash** 查看对象是哪种类型
  - **git cat-file -p hash** 根据对象的类型显示其内容
  - **git cat-file -s hash** 显示对象的大小（byte）
- **git rebase** （git rebase 是做变基操作，这个命令可以做很多事情，但是同时也算是比较危险的命令）
  - **git rebase -i 需要修改commit的父级commitID（使用HEAD~数字也可以）** 进行rebase的交互式操作，会进入到交互式的页面
  - 根据提示，我们选择我们需要进行的操作。如果需要修改之前几次commit的message，只需要到那一次commit之前将pick 改为 r，按照git提示操作即可；如果需要将连续几次commit整理为1个，只需要到那一次commit之前将pick 改为 s，按照git提示操作即可。git 
- **git rev-parse HEAD 显示HEAD的HASH值，可以直接看出来HEAD的HASH值与当前分支最新commit的HASH值相同**


