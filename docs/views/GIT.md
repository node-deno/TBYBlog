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

- # GIT配置


- 查看配置
  - git config --list --global(local/system)
- 配置name
  - git config --global(local/system) user.name 'you_name'
- 配置email
  - git config --global(local/system) user.email 'you_email'

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

# 常用命令操作

> 在GIT的命令中，后面加的后缀都是可以互相叠加的

- **git mv 文件1 文件2**（等价于先将文件名称进行mv，再add 文件，将文件保存至暂存区）
  - 对被git管理的文件进行重命名
- **git rm 文件**(等价于先将文件进行rm，再add文件，将文件保存至暂存区)
  - 对被git管理的文件进行删除
- **git add 文件**
  - 将文件添加至暂存区（包括没有被git管理的文件和被git管理进行了增删改的文件）
  - 使用 git add .  命令可以将所有的文件添加至暂存区
- **git log**
  - **git log --online** 查看当前分支日志的简洁信息
  - **git log -数字** 查看当前分支最近几次（数字）日志
  - **git log 分支名** 查看某分支日志
  - **git log --all** 查看所有分支的git日志
  - **git log --graph** 通过git图形化的方式查看日志
- **git branch**
  - **git branch 分支名** 基于当前分支创建出一个新的分支
  - 





