---
title: JavaScript杂记
date: 2021-07-02
categories:
- 前端面试 
tags:
- js
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

> document.write() 在代码执行过程中执行会将内容添加至页面中；如果当代码执行完毕再执行document.write()会将原有页面的内容全部覆盖。
>
> >代码在执行过程中执行document.write()
> >
> >```html
> ><!DOCTYPE html>
> ><html>
> ><body>
> >
> ><h1>我的第一个 Web 页面</h1>
> >
> ><p>我的第一个段落。</p>
> >
> ><script>
> >document.write(Date());
> ></script>
> >
> ></body>
> ></html>
> >```
>
> >当代码全部执行完再执行document.write()会将原有的代码进行覆盖
> >
> >```html
> ><!DOCTYPE html>
> ><html>
> ><body>
> >
> ><h1>我的第一个 Web 页面</h1>
> >
> ><p>我的第一个段落。</p>
> >
> ><button onclick="myFunction()">点我</button>
> >
> ><script>
> >function myFunction() {
> >    document.write(Date());
> >}
> ></script>
> >
> ></body>
> ></html>
> >```
> >
> >

