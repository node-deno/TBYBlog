---
title: JQuery是怎么炼成的
date: 2021-07-09
categories:
 - JS
tags:
 - JS
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>
## JQuery语法

### 基础语法

> **基础语法：$(selector).action()**
>
> 美元符号定义JQuery
>
> selector(选择器)查找相对应的HTML元素
>
> action()执行对于元素的操作

**实例**

- $(this).hide()---隐藏当前元素
- $("p").hide()---隐藏所有`<p>`元素    
- $("p.test").hide()---隐藏所有class=“test”的`<p>`元素
- $("#test").hide()---隐藏id="test"的元素

### 文档就绪事件

```js
$(document).ready(function(){
	// 开始写JQuery代码
})

// 简写版本
$(function(){
    // 开始写JQuery代码
})
```

> 把JQuery代码写在文档就绪事件中是防止DOM在未完全加载完成前执行。如果在DOM没有加载之前可能会操作失败，下列情况就会失败
>
> - 试图隐藏一个存在的元素
> - 获得未完全加载的图像的大小

**load和ready区别**

|          | window.onload                                                | $(document).ready()                                          |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 执行时机 | 必须等待网页内容全部加载完毕（包括图片等），然后再执行被包裹代码 | 只需要等待网页中的DOM结构加载完毕，就能执行被包裹的代码（不会等待图片是否已经加载，只要DOM已经构建完成即可） |
| 执行次数 | 只能执行一次，如果第二次，那么第一次的执行会被覆盖           | 可以执行多次，第N次都不会被上一次覆盖                        |
| 简写方案 | 无                                                           | $(function(){})                                              |

## JQuery选择器

> JQuery选择器基于CSS选择器，除此之外还有一些自定义的选择器
>
> JQuery中所有选择器都以美元符号开头：$()

### 元素选择器

```js
$(function(){
    $("button").click(function(){
     	alert("元素选择器")
    })
})
```

### ID选择器

```js
$(function(){
    $("#test").click(function(){
     	alert("ID选择器")
    })
})
```

### class选择器

```js
$(function(){
    $(".test").click(function(){
     	alert("class选择器")
    })
})
```

### 其他选择器

- $("*")---选取所有元素
- $("this")---选取当前HTML元素
- $("p.intro")---选取class为intro的`<p>`元素
- $("p:first")---选取第一个`<p>`元素
- $("ul li:first")---选取第一个`<ul>`元素中的第一个`<li>`元素
- $("ul li:first-chid")---选取每个`<ul>`元素中的第一个`<li>`元素
- $("p:eq(数字)")---选取第数字+1个`<p>`元素

> 在JQuery中有一个比较有趣的现象，如果在父子选择器的基础上加上:first/:last/:eq(数字)  的话 只在子元素后面加上这三个指定词，那么:first/:eq(数字)就认定是在第一个父元素的基础上进行子元素的变动、:last就认定是在最后一个父元素的基础上进行子元素的变动
>
> ```js
> <!DOCTYPE html>
> <html>
> <head>
> <meta charset="utf-8"> 
> <title></title>
> <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
> </script>
> <script>
> $(document).ready(function(){
>   $("#btn1").click(function(){
>     $("ul li:first").hide();
>   });
> });
> 	
> $(document).ready(function(){
>   $("#btn2").click(function(){
>     $("ul li:last").hide();
>   });
> });
> 	
> $(document).ready(function(){
>   $("#btn3").click(function(){
>     $("ul:last li:first").hide();
>   });
> });
> 	
> $(document).ready(function(){
>   $("#btn4").click(function(){
>     $("ul li:eq(1)").hide();
>   });
> });
> 	
> $(document).ready(function(){
>   $("#btn5").click(function(){
>     $("ul:eq(1) li:eq(2)").hide();
>   });
> });
> 	
> </script>
> </head>
> <body>
> 
> <p>List 1:</p>
> <ul>
>   <li>Coffee</li>
>   <li>Milk</li>
>   <li>Tea</li>
> </ul>
> 
> <p>List 2:</p>
> <ul>
>   <li>Coffee</li>
>   <li>Milk</li>
>   <li>Tea</li>
> </ul>
> 
> 	<button id="btn1">点我1</button>
> 	<button id="btn2">点我2</button>
> 	<button id="btn3">点我3</button>
> 	<button id="btn4">点我4</button>
> 	<button id="btn5">点我5</button>
> 
> </body>
> </html>
> ```

- $("[href]")---选取带有href属性的元素
- $("a[target='_blank']")---选取所有target属性值等于"\_blank"的`<a>`元素
- $("a[target!='_blank']")---选取所有target属性值不等于"\_blank"的`<a>`元素
- $(":button")---选取所有type="button"的`<input>`元素和`<button>`元素
- $("tr:even")---选取偶数位置的`<tr>`元素
- $("tr:odd")---选取奇数位置的`<tr>`元素

## JQuery事件

> 目前只讨论一些常用的事件

### 鼠标事件

### 键盘事件

### 表单事件

### 文档/窗口事件

































