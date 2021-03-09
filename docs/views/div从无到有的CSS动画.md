---
title: div从无到有的CSS动画
date: 2021-03-03
categories:
 - 前端面试
tags:
 - css
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

# div从无到有的CSS动画

> 最近根据公司的发展，组长说要将我们B端的产品打造一个官网（仅限于静态样式的展示和少量后端的交互），我就一往无前的将项目给接了下来。但是在开发的过程中遇见了一个有意思的现象，将div从无到有设置的动画不能生效，那么今天就给大家来聊一聊这个事。

当我们使用display:none时，是让该元素在文本流中消失；使用display:block/inline-block/inline时，是使元素在文本流中变为块元素/行内块元素/行内元素。按照这个规则，是实现一个元素凭空从无到有的最好搭档，但是使用过之后发现没有卵用。你说这尴不尴尬.........

```html
<!-- 展示当动画遇见display:none转化为display:block时动画不能生效 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      a {
        width: 300px;
        height: 100px;
        display: block;
        text-decoration: none;
        background-color: lightgreen;
      }
      div {
        background-color: rgb(233, 255, 224);
      }
      .t {
        display: none;
      }
      /* 兄弟元素选择器 */
      a:hover + .t {
        display: block;
        transition: 1s;
      }
    </style>
  </head>
  <body>
    <a href="">我一个测试超链接</a>
    <div class="t">
      <ul>
        <li>香蕉</li>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
    </div>
    <div>测试div</div>
  </body>
</html>

```

看完上述代码是不是脑子一片空白，没有啥思路，不知道咋搞了。兄弟，不用慌，有我呢（想象此处有抛媚眼照片）。

```html
<!-- 展示当动画遇见display:none转化为display:block时动画不能生效 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      a {
        width: 300px;
        height: 100px;
        display: block;
        text-decoration: none;
        background-color: lightgreen;
      }
      div {
        background-color: rgb(233, 255, 224);
      }
      .t {
        opacity: 0;
      }
      /* 兄弟元素选择器 */
      a:hover + .t {
        opacity: 1;
        transition: 1s;
      }
    </style>
  </head>
  <body>
    <a href="">我一个测试超链接</a>
    <div class="t"> 
      <ul>
        <li>香蕉</li>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
    </div>
    <div>测试div</div>
  </body>
</html>
```

别急兄弟，我知道你看了这段代码肯定想骂娘。不用慌兄弟，我就是给你举一个反例，因为如果使用opacity时元素依然在文档流中存在，并且占据文档流的位置，这也就是页面显示成现在样子的原因。

```html
<!-- 使用opcity与max-height混合使用来完成div从无到有的功能 -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      a {
        width: 300px;
        height: 100px;
        display: block;
        text-decoration: none;
        background-color: lightgreen;
      }
      div {
        background-color: rgb(233, 255, 224);
      }
      .t {
        opacity: 0;
        max-height: 0;
      }
      /* 兄弟元素选择器 */
      a:hover + .t {
        opacity: 1;
        transition: 1s;
        max-height: 9999px;
      }
    </style>
  </head>
  <body>
    <a href="">我一个测试超链接</a>
    <div class="t"> 
      <ul>
        <li>香蕉</li>
        <li>苹果</li>
        <li>橘子</li>
      </ul>
    </div>
    <div>测试div</div>
  </body>
</html>
```

看着这段代码是不是一句“卧槽”不由自主的从嘴里发出，真是年轻人不讲武德，还能这样操作。其实代码的世界有很多混合搭配，常规的书中和技术博客中会给大家讲一些常规的技术，但是有时候解决刁钻的问题就需要用一些不常用的方式。

​		谢谢您的观看（敬礼）！



















