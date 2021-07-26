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

#### click

> **点击事件**

```js
$("p").click(function(){
    alert("段落被点击了")
})
```

#### dblclick

> **双击事件**

```js
$("p").dblclick(function(){
    alert("这个段落被双击。");
});
```

#### mouseenter

> **鼠标进入事件**

```js
$("p").mouseenter(function(){
    $(this).css("background-color","yellow")
})
```

#### mouseleave

> **鼠标离开事件**

```js
$("p").mouseleave(function(){
    $(this).css("background-color","green")
})
```

#### hover

> **鼠标悬停事件**
>
> 该事件中可以运行两个函数，分别配套mouseenter和mouseleave事件。如果只填写一个函数那么这个函数直接配套mouseenter和mouseleave两个函数

```js
$("p").hover(function(){
    $("p").css("background-color","yellow");
},function(){
    $("p").css("background-color","pink");
});
```

### 键盘事件

#### keypress

> 我认为是一个不算完全的键盘事件，官方文档解释是：**键按下过程**。但实际上如果你是用输入法的话就不能正常的触发事件，并且ALT、CTRL、SHIFT、ESC键也都不会触发，那么这个事件以后尽量不要使用，使用keydown或者keyup事件进行代替。

#### keydown

> 键盘按下事件

```js
$("input").keydown(function(){
    $("input").css("background-color","yellow");
});
```

#### keyup

> 键盘松开事件

```js
$("input").keyup(function(){
    $("input").css("background-color","pink");
});
```

### 表单事件

#### submit

> 表单提交事件

```js
$("form").submit(function(){
    alert("提交");
});
```

#### change

> 表单内容修改事件

```js
$("input").change(function(){
    alert("文本已被修改");
});
```

#### focus

> 表单获得焦点事件

```js
  $("input").focus(function(){
    $("span").css("display","inline").fadeOut(2000);
  });
```

#### blur

> 表单失去焦点事件

```js
$("input").blur(function(){
    alert("输入框失去了焦点");
});
```

### 文档/窗口事件

#### load

> 元素加载事件
>
> 当图片全部加载时触发该事件（PS：在JQuery1.8中已经弃用）

```js
$("img").load(function(){
    alert("图片已载入");
});
```

#### resize

> 调整浏览器窗口大小事件

```js
$(window).resize(function(){
    $('span').text(x+=1);
});
```

#### scroll

> 元素滚动事件

```js
$("div").scroll(function(){
    $("span").text(x+=1);
});
```

## JQuery效果

### 隐藏和显示

#### hide

> 语法：$(selector).hide(speed,callback);
>
> speed参数规定隐藏的速度，可以取"slow"、"fast"、毫秒
>
> callback参数是隐藏完成后执行的函数名称

```js
$("#hide").click(function(){
  $("p").hide();
});
```

#### show

> 语法：$(selector).show(speed,callback);
>
> speed参数规定显示的速度，可以取"slow"、"fast"、毫秒
>
> callback参数是显示完成后执行的函数名称

```js
$("#show").click(function(){
  $("p").show();
});
```

#### toggle

> 语法：$(selector).toggle(speed,callback);
>
> speed参数规定显示/隐藏的速度，可以取"slow"、"fast"、毫秒
>
> callback参数是显示/隐藏完成后执行的函数名称

```js
$("button").click(function(){
  $("p").toggle();
});
```

### 淡入淡出

#### fadeIn

> **使不显示的元素显示**
>
> 语法：$(selector).fadeIn(speed,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

```js
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```

#### fadeOut

> **使显示的元素不显示**
>
> 语法：$(selector).fadeOut(speed,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

```js
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```

#### fadeToggle

> **使元素在fadeIn和fadeOut两种状态来回切换**
>
> 语法：$(selector).fadeToggle(speed,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

```js
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```

#### fadeTo

> **使元素渐变为指定透明度**
>
> 语法：$(selector).fadeTo(speed,opacity,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒  ----   **必填**
>
> opacity参数为指定的透明度，范围在0~1之间  ----   **必填**
>
> callback参数是动作完成后执行的函数名称

```js
$("button").click(function(){
  $("#div1").fadeTo("slow",0.15);
  $("#div2").fadeTo("slow",0.4);
  $("#div3").fadeTo("slow",0.7);
});
```

### 滑动

#### slideDown

> **使元素向下滑动的方式出现**
>
> 语法：$(selector).slideDown(speed,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

```js
$("#flip").click(function(){
  $("#panel").slideDown();
});

```

#### slideUp

> **使元素向上滑动的方式消失**
>
> 语法：$(selector).slideUp(speed,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

```js
$("#flip").click(function(){
  $("#panel").slideUp();
});
```

#### slideToggle

> **使元素在slideDown和slideUp两种状态来回切换**
>
> 语法：$(selector).slideToggle(speed,callback)
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

```js
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```

### 动画

> **JQuery  animate()方法用户创建自定义动画 **
>
> **animate()方法几乎可以操作所有CSS属性，但是要是用驼峰的形式书写属性名，如：padding-left应该写为paddingLeft**
>
> 语法：$(selector).animate({params},speed,callback)
>
> params参数定义形成动画的CSS属性，并且可以一次写多个CSS样式属性  ----   **必填**
>
> speed参数规定效果的时长，可以取"slow"、"fast"、毫秒
>
> callback参数是动作完成后执行的函数名称

#### animate

```js
$("button").click(function(){
  $("div").animate({left:'250px'});
});
```

#### animate操作多个属性

> 注意：animate几乎可以操作所有的CSS属性，并且必须使用驼峰命名法来书写属性名

```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    opacity:'0.5',
    height:'150px',
    width:'150px'
  });
});
```

#### animate使用相对值

> 注意：需要在值得前面加上+=或-= 

```js
$("button").click(function(){
  $("div").animate({
    left:'250px',
    height:'+=150px',
    width:'+=150px'
  });
});
```

#### animate使用队列功能

> JQuery提供对动画的队列功能。如果编写多个animate动画连在一起，那么在执行阶段，会使用队列的方式进行动画的执行，在先执行完成第一个animate动画之后才会执行第二个animate动画，以此类推。。。。

```js
$("button").click(function(){
  var div=$("div");
  div.animate({height:'300px',opacity:'0.4'},"slow");
  div.animate({width:'300px',opacity:'0.8'},"slow");
  div.animate({height:'100px',opacity:'0.4'},"slow");
  div.animate({width:'100px',opacity:'0.8'},"slow");
});
```

### 停止动画

#### stop

> 用于在动画完成前对它们进行停止（PS：可以停止动画和其他一切动画效果）
>
> 语法：$(selector).stop(stopAll,gotoEnd)
> stopAll参数规定是否清除动画列表。默认为false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
>
> goToEnd参数规定是否立即完成当前动画，默认是false。

```js
$("#stop").click(function(){
  $("#panel").stop();
});
```

## JQuery链

> 在JQuery中允许使用链式操作
>
> 如果需要在相同的元素上运行多条JQuery命令，那么就可以使用链式操作。执行原理和队列的方式相同

```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```

## JQuery HTML

### 获取内容和属性

> JQuery拥有可操作HTML元素和属性的强大方法

#### 获取内容-text()、html()、以及val()

> text（）只会显示所选元素的文本内容，不会显示多余的内容
>
> html（）会显示所选元素内包含的所有内容，包括HTML标签

- text（）
  - 设置或返回所选元素的文本内容
- html（）
  - 设置或返回所选元素的内容（包括HTML标记）

```js
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
</script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    //alert("Text: " + $("#test").text()='6544321');
	  $("#test").text('<h2>654321</h2>')
  });
  $("#btn2").click(function(){
    //alert("HTML: " + $("#test").html());
	  $("#test").html('<h1>654321</h1>')
  });
});
</script>
</head>

<body>
<p id="test">这是段落中的<b>粗体</b><i>斜体</i>文本。</p>
<button id="btn1">显示文本</button>
<button id="btn2">显示 HTML</button>
</body>
</html>
```

- val（）
  - 设置或返回表单字段的值

```js
$("#btn1").click(function(){
  alert("值为: " + $("#test").val());
});
```

#### 获取属性-attr()和prop()

> 













































































