---
title: 变量的解构赋值
date: 2020-09-14
categories:
 - 前端面试
tags:
 - ES6
---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>
# 解构赋值

## 数组的解构赋值

```js
// 基础用法
var a=1,b=2,c=3;


// ES6的用法
var [a,b,c]=[1,2,3]
// ES6
```

## Promise

**解决异步回调的一种新方法**

```js
// Promise执行任务是同步的，但是一般用来执行任务异步
let p=new Promise(function(resolve,reject){
                console.log('123456......');
        });

console.log('abc')
```

```js
// Promise的关键点在于可以先执行异步任务，在执行异步任务的时候不用提前传入回调函数（对比Jquery发送ajax请求与axios发送ajax请求）

// 区别：Jquery发送ajax会引起回调地狱

let p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                let n = parseInt(Math.random() * 1000)
                console.log(n);
                if (n % 2 == 0) {
                    // 异步任务执行成功，告诉当前Promise对象，执行任务成功，让Promise对象保存成功的状态
                    resolve("成功的数据");
                } else {
                    // 异步任务执行成功，告诉当前Promise对象，执行任务成功，让Promise对象保存成功的状态
                    reject("失败的数据");
                }

                console.log(p);

            }, 1000)
        });

        // 目前p要么是resolved状态，要么是rejected状态
        // 此时调用then时，就会根据p的不同状态，回调不同的函数
        p.then(function(value){
            console.log('成功:'+value);
        },function(value){
            console.log('失败:'+value);
        });
```

**异步就是超过一个地方会有调用权力，同步就是只有一个地方有调用的权利**











































