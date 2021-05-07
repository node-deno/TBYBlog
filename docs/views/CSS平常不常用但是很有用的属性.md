---
title: CSS平常不常用但是很有用的属性
date: 2021-03-29
categories:
 - CSS
tags:
 - CSS
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>


# CSS平常不常用但是很有用的属性



> **设置内容能不能被选中，在一些时候内容是不希望被用户所选中的**

```css
user-select:none/text   不能复制/能复制
```



> **与滚动条相关的属性**
>
> 滚动条相关的样式属性不是所有浏览器内核都支持的，例如火狐的浏览器就不能很好的支持，目前只有两款浏览器内核支持滚动条样式的自定义：webkit和IE浏览器的内核（不讨论这个奇葩浏览器）
>
> 使用webkit内核的浏览器有很多，如：chrome、safari、搜狗浏览器、360浏览器、qq浏览器、遨游浏览器等。所以我们要学习关于webkit自定义滚动条样式的属性

1. ::-webkit-scrollbar   滚动条整体部分，可以设置滚动条宽度
2. ::-webkit-scrollbar-button  滚动条两端的按钮
3. ::-webkit-scrollbar-track  外层轨道
4. ::-webkit-scrollbar-track-piece  内层滚动槽
5. ::-webkit-scrollbar-thumb  滚动的滑块
6. ::-webkit-scrollbar-corner  边角
7. ::-webkit-resizer  定义右下角拖动快的样式

![](https://segmentfault.com/img/bVpI0Z)





在iview框架Table组件的过程中，将渲染Table组件的data数据初始化为null会报错，说找不到length，也就是说Table组件的data数据初始化应该为一个空数组