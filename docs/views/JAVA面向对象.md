---
title: JAVA面向对象
date: 2020-09-08
categories:
  - 工作总结
tags:
  - java
---

<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>


# JAVA面向对象

**在一开始进行培训JAVA的时候立了雄心壮志，立志在一个月的时间内掌握JAVA的基础，事实上我天真了，因为这个培训是项目驱动，导致JAVA的基础老师只讲了一个星期（本来只讲一天，这个也是因为班里有很多和我一样不了解JAVA的同学老师才不得不妥协进行一些JAVA基础知识的讲解）。但是上面那些都是借口，我会在最近抽时间学习JAVA基础来达到对一整个项目有基础了解目的，让我们拭目以待JAVA第二轮的学习**

**JAVA是一门面向对象的语言，并且JAVA现在依然是应用最多的后端语言。那么今天就来学习下JAVA的面向对象。**

> 什么叫做面向对象？
>
> 面向对象是模型化的，我们在编程的过程中只需要抽象一个类，就可以创建出来一类的对象。并且可以赋予这些对象属性（静态的）和方法（动态的）。这也就是我们为什么称**万物皆对象**，因为我们可以将这个世上的任何一个对象找出一些共性抽象为类。

接下来我们需要了解面向对象的三大特性是

## 封装

  - 隐藏对象的属性和实现细节，仅对外提供公共访问方式，将变化隔离，便于使用，提高复用性和安全性。
  - 属性和处理属性的方法集合起来。把数据及数据的操作方法放在一起，作为一个相互依存的整体即对象。

  ```java
  class App{
      private final String v1="我是一个外部不能修改的类";
      public void f1(){
          System.out.println("我是一个类，展示了类的封装性");
          System.out.println("V1："+v1);
      }
  }
  ```

## 继承

  - 提高代码复用性；继承是多态的前提。

  - JAVA之间的继承只能是单继承（**Ps：在JAVA中可以通过接口来实现多继承，接口类似于类只是为了实现多继承**）

  - JAVA中的类顶级父类是java.lang.Object这个类，所以Object这个类中所有的非私有属性和方法是任何一个对象都拥有的

    ```java
    class Car {
    	String color;
    	int speed;
    }
    class Bmw extends Car {
    }
    class Audi extends Car {
    	public void f1() {
    		System.out.println("我是Audi");
    	}
    }
    class Auto extends Car {
    }
    public class App {
    	public static void main(String[] args) {
    		Bmw b = new Bmw();
    		Audi a = new Audi();
    		Auto au = new Auto();
    	}
    }  
    ```

- 每当输出一个对象的时候，其实会调用该对象的toString方法，输出的就是toString方法的返回值（char[]  除外）

  ```java
  class Person {
  	int id;
  	String name;
  
      //构造方法
  	Person(int id, String name) {
  		this.id = id;
  		this.name = name;
  	}
  
  	@Override
  	public String toString() {
  		return "你愁啥";
  	}
  }
  
  public class App {
  	public static void main(String[] args) {
  		Person p=new Person(11,"柯南");
  		System.out.println(p);
  		System.out.println(p.toString());
  	}
  }
  ```

- super()代表父类特征

  - 在每个类的构造方法的第一句总是super（）这行代码，无论我们写不写JAVA都会在底层执行的时候给我们加上
  - super()代表调用父类的构造方法

  ```java
  class Person {
  	Person() {
  		System.out.println("Person构造函数");
  	}
  }
  class Student extends Person {
  	public Student() {
  //		super();
  		System.out.println("Student构造方法");
  	}
  }
  public class App {
  	public static void main(String[] args) {
  		Student s = new Student();
  	}
  }
  
  ```

## 多态

  - 父类或接口定义的引用变量可以指向子类或具体实现类的实例对象。提高了程序的拓展性。

## 	向上转型

**所谓向上转型就是一个父类引用指向了子类的对象（Ps：发生向上转型时，子类独有的属性和方法无法使用）**

向上转型也是多态的前提，一个类型可以根据情况转变为不同的类

```java
class Person {
	void eat() {
		System.out.println("我吃");
	}
	void run() {
		System.out.println("我跑");
	}
}
class Student extends Person {
	void study() {
		System.out.println("好好学习");
	}
}
public class App {
	public static void main(String[] args) {
		Person s = new Student();
		s.eat();
		s.run();
	}
}
```

- 发生向上转型时
  - 最终调用的方法只和new对象有关，也就是new的是谁，就调用谁的方法（**Ps：这个方法能不能调用取决于父类中有没有这个同名的方法，并且向上转型发生时子类独有的属性和方法无法调用**）
  - 调用的属性只和类型有关。也就是不管是谁new的，只会调用父类的属性

```java
class Fu {
	int a = 10;
	void f1() {
		System.out.println("父类f1方法");
	}
}
class Zi extends Fu {
	int a=30;
	@Override
	void f1() {
		System.out.println("子类f1方法");
	}
}
public class App{
	public static void main(String[] args) {
		Fu c = new Zi();
		System.out.println(c.a);
		c.f1();
	}
}
```

## 向下转型

## 接口

**由于JAVA中只能进行class的单继承的模式，所以出现了接口可以模拟多继承**

```java
interface Monster {
	// 这就是一个抽象方法
	void destory();
}

interface Vampire {
	void drinkblood();
}

class Darcula implements Monster, Vampire {
	@Override
	public void destory() {
		System.out.println("我破坏");
	}
	@Override
	public void drinkblood() {
		System.out.println("我吸血我吸吸");
	}
	public void fly() {
		System.out.println("我飞飞飞");
	}
}

public class App {
	public static void main(String[] args) {
		Darcula d = new Darcula();

		d.destory();
		d.drinkblood();
		d.fly();
	}
}
```

