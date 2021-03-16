---
title: 使用VUE写一个网站的主页
date: 2020-11-05
categories:
 - vue
tags:
 - vue
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

# 使用VUE写一个网站的主页

由于公司对我们最近进入公司的大学生进行培训，要求我们每个小组做出一个项目出来，而我作为我们小组中唯一的前端我就需要承担一些比较重要的工作。话不多说，这次我要做的就是需要使用VUE写一个高大上的网页主页。在几年前我们前端的主要技术栈还是Jquery的时候我们做一些页面样式的动态改变都是通过DOM节点的操作来进行的，这次使用VUE来写一个网站的主页主要也是为了练习VUE进行样式的动态改变。

不说废话了，兄弟们冲冲冲！！！

这次的网站主要参考翼支付的首页来做，先来的原版的截图

看完翼支付之后，那我们现在就开始模仿，首先模仿上边栏随页面滚动而表现不一样的样式效果。这样的话就需要我们的VUE页面监听页面的滚动事件，当页面滚动到某一个位置之后就会触发样式的改变。在实现这个功能之中我们需要掌握VUE的页面滚动事件、VUE样式的动态改变。我们首先向这两个小知识点进行冲锋。

> **VUE页面的滚动事件（Ps：说到这里就要好好学习一下关于DOM的事件了，这个在之后的文章中更新）**

滚动事件属于DOM事件中的框架事件，需要使用onscroll事件。但是这个事件是如何在VUE项目中进行使用呢，话不多说，上代码！

```js
// 直接给全局（window）加上滚动事件即可
window.onscroll=function(){
     // documentElement  代表html标签
     // document.documentElement.scrollTop  获取滚动条位置
     console.log(document.documentElement.scrollTop)
}
```

看到这里你会发现监听页面的滚动事件是比较特殊的一种事件，即可以属于BOM事件也可以属于DOM事件，那么在之后的文章中我会整理下DOM事件和BOM事件来分享。

已经做到这一部分，我们就可以根据获取滚动条的位置来进行判断然后来进行操作。那下面就来学习怎么可以使VU的样式进行动态的改变

> **VUE样式的动态改变**

- 给class设置成为对象（并且可以一次性给多个值）

```js
<!--
	给class设置一个对象，并且对键值的值进行true或者false的赋值，来决定该键名的样式是否生效
	并且可以通过class属性继续为元素设置固定的样式信息
-->
<div class="default" :class="{'active':isActive,'inactive':isInactive}">
    VUE动态更改样式
</div>

<script>
	export default{
        data(){
            return {
                isActive:true,
                isInactive:false
            }
        }
    }
</script>
```

- 给class直接绑定一个对象

```js
<!--
	直接给class赋值对象，这个对象可以在data或computed中直接定义好
	这个属性的值最终是否生效，要取决于这个属性的值是true还是false
-->
<div class="default" :class="testCss">
    VUE动态更改样式
</div>

<script>
	export default{
        // 使用data或者computed都可以
        data(){
            return {
                testCss:{
 					isActive:true
                }
            }
        }
        
        computed:{
        	testCss:function(){
                return {
                    isActive:true
                }
            }
    	}
    }
</script>
```

- 给class传递一个数组

```js
<!--
	可以给class传递一个数组，数组中每一项的值对应data中的数据，并且可以使用三元表达式来进行判断
-->
<div class="default" :class="[active,inactive]">
    VUE动态更改样式
</div>

<div class="default" :class="[active,inactive?isInactive:'']">
    VUE动态更改样式
</div>

<script>
	export default{
        // 使用data或者computed都可以
        data(){
            return {
                testCss:{
 					active:"isActive",
 					inActive:"isInActive",
                }
            }
        }
    }
</script>
```

**我们不仅仅可以通过class外联样式，还可以通过style内联样式为VUE更改样式**

- 直接给:style设置样式

```js
<div id="app">
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">内联样式</div>
</div>
```

- 直接给:style绑定一个样式对象

```js
<div id="app">
  <div v-bind:style="styleObject">菜鸟教程</div>
</div>
```

- 给:style使用数组，将多个样式应用到一个元素上

```js
<div id="app">
  <div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div>
</div>
```

> **我们现在已经将两部分基础的点学习完了，现在就要开始动手编写代码了，兄弟们跟我发起总攻**

我们由上面的动图可以知道，我们需要使用页面滚动事件来触发样式的动态变化，然后我们就coding......coding.......然后项目就怼完了，其实也没有啥技术含量，感觉自己好菜，一个这都需要用来记录，不说废话了，源代码地址粘上来

https://github.com/node-deno/vueWeb.git

Ladies and gentlemen 我们下次再见














