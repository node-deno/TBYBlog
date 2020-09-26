---
title: redis
date: 2020-09-21
categories:
 - 非关系型数据库
tags:
 - redis
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

# redis

redis是一个开源的数据库，内存中的数据结构存储系统，它可以用作数据库、缓存和消息中间件

**redis的使用场景：热点信息的存储，并且支持并发**

## 五大数据结构

Redis是KV结构的内存数据库，其中value包含五种数据类型

- String
  - String类型的使用场景
    - 缓存
      - 对象缓存（数据库数据缓存）
      - 分布式共享数据（Session）
    - 计数
      - 计数器（如：朋友圈点赞）
      - 全局序列号生成器
      - 秒杀（将库存放在redis中，如果库存没有了直接将用户挡在外面，可以购买的放在任务队列中。。。）
    - 高级功能
      - 分布式锁
- Hash
- List
- Set
- ZSet

## Rides持久化

Rides持久化的方式有两种

- RDB
  - 优点：
    - RDB是一个紧凑压缩的二进制文件，存储效率较高
    - RDB内部存储的是redis在某个时间点的数据快照，非常适合用处数据备份2
    - RDB恢复数据的数据要比AOF快很多
  - 缺点：
    - 
- AOF（**AOF持久化方式默认是关闭的，需要手动开启**）





AOF写数据的三种策略

- always
- everysec
- no



## 缓存雪崩











