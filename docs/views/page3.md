---
title: JAVA基础
date: 2020-09-08
categories:
  - 工作总结
tags:
  - java
---

<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>

# JAVA基础

> JAVA依然是现在的应用最广泛的语言，今天我们来学习关于JAVA的一些基础知识。
>
> JAVA是既属于编译型的语言又属于解释型的语言，因为我们编写完JAVA代码之后会通过JRE编译器将我们的JAVA源代码编译为.class文件（字节码文件）然后再在JVM虚拟机上进行解释执行。业界很多人说JAVA是一门编译型语言，其实这样说是不准确的，JAVA是属于编译解释型语言。对于C和C++来说，它们经过一次编译之后就可以直接在操作系统中进行执行，但是JAVA是通过JRE编译器编译为字节码文件之后再在JVM上解释运行，并且不同的操作系统上有不同的JVM，所以JAVA也就是通过JVM实现了程序员编码上的跨平台。

## 创建一个JAVA文件

```
//创建JAVA文件之后，里面需要声明一个与文件名同名的类名
public class App{
	//每个JAVA文件中只有一个入口和出口，如果执行该Java文件那么就是从main中进入和从main中出来出来
	public static void main(String[] args){
	
	}
}
```

## JAVA的数据类型

**JAVA中的数据类型分为两大类**

- 基本类型
  - 字符类型
    - char：长度16位，存储Unicode码，**使用单引号进行赋值**
  - 布尔类型
    - boolean：长度只有1位，只有true和false两个取值，也就是说非0及1
  - 数值类型
    - byte：长度有8位，最大存储数据量是255，存放数据的范围是-128~127之间
    - short：长度有16位，最大存储数据量是65536，存放数据的范围是-32768~
    - int：长度有32位，最大存储数据量是2的32次方减1，存放数据的范围是负的2的31次方到正的2的31次方减1
    - long：长度有64位，最大存储数据量是2的64次方减1，存放数据的范围是负的2的64次方到正的2的63次方减1
    - float：长度有32位，数据范围在3.4e-45~1.4e38，直接赋值时必须在数字后加上f或F
    - double：长度有64位，数据范围在4.9e-324~1.8e308，赋值时可以加d或D也可以不加
- 复合类型（类类型）
  - 除了基本类型，其余的都属于复合类型（类类型），类似于JS中的复杂类型

## JAVA修饰符

### 访问修饰符

- default
  - 缺省默认访问修饰符
  - 在同一包内可见，不适用任何修饰符。使用对象：类、接口、变量、方法。
- private
  - 私有访问控制符
  - 在同一类内可见，适用对象：变量、方法。**注意：不能修饰类（外部类）**
- public
  - 公共访问控制符
  - 对所有类可见。使用对象：类、接口、变量、方法。
- protected
  - 保护访问控制符
  - 对同一包内的类和所有子类可见。使用对象：变量，方法。**注意：不能修饰类（外部类）**

### 非访问修饰符

- static（**被static修饰的方法和变量都会放在一个空间中，在类被加载的时候static修饰的方法和变量在固定的位置开辟一个固定大小的内存区域，（只要这个类被加载，JAVA虚拟机就能根据类名在运行时数据区的方法区内找到他们），并且被static修饰过的方法和变量是独立于该类的，它不依赖某个特定的实例变量，也就是说它被这个类所有的实例共享。所有实例的引用都指向同一个地方，任何一个实例对其的修改都会导致其他实例的变化。**）
  - 静态变量
    
    - static关键字用来生命独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。**Ps：局部变量不能被声明为static变量，也就是说被static修饰过的变量都是全局可用的**
    
  - 静态方法
    
    - static关键字用来声明独立于对象的静态方法，静态方法不能使用类的非静态变量。
    
  - **静态static关键字修饰的成员不属于某一个对象，而是属于类，static字段会被所有类的实例共享。static修饰的块被称为静态块，静态块在类被加载的时候就执行（Ps：类被加载的时机：1.实例化类2.调用了类的静态属性3.调用了类的静态方法4.调用Class.forName("类的全名")），而且在整个程序运行期间只执行一次。**
  
    ```java
    class Foo {
    	static int a;
    	static void f1() {
    		System.out.println("静态方法");
    	}
    	static {
    		System.out.println("静态块");
    	}
    }
    
    public class App {
    	public static void main(String[] args) {
    		Foo.f1();
    		System.out.println("main方法");
    	}
    }
    ```
  
    
- final
  - final变量不能被重新赋值，通常和static修饰符一起来创建类常量
  - 类中final方法可以被子类继承，但是不能被子类重写
  - final类不能被继承
- abstract（**Ps：含有抽象方法的类一定要声明为抽象类**）
  - 抽象类不能用来实例化对象，**只能用来继承，也就是通过abstract实现JAVA的多态，一个类不能同时被final和abstract修饰**
  - 抽象方法是一种不能被实现的方法，该方法的具体实现由子类提供。抽象方法不能被声明为final和static。任何继承抽象类的子类必须实现父类的抽象方法，除非该子类也是抽象类。一个抽象类中可以包含多个抽象方法，也可以不包含抽象方法
  - **抽象类、bai就是一个用abstract修饰的类，在这个类中、你du可以定义一些不需要具体实现的方法zhi、也就是没有方法体的dao方法、这些方法叫做抽象方法、当一个类要继承这个抽象类时、就必须要实现这些抽象方法、。当你在做一个比较复杂的项目时、一些简单的方法就可以马上写出来、但一些复杂的方法、在不同的类中需要不同的实现、那么这个时候就需要用到抽象类的。**
- synchronized（**Ps：在多线程的时候非常常用**）
  
  - synchronized关键字生命方法同一时间只能被一个线程访问。synchronized修饰符可以修饰四种访问修饰符。
- transient
  
  - 序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机(JVM)跳过该特定的变量。
- volatile
  
  - volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。

## JAVA方法

### JAVA方法的定义格式

（访问修饰符）+（非访问修饰符）+返回值类型+方法名+（参数）

public static  void test（int value1）

**访问修饰符、非访问修饰符和参数可以省略，但是如果没有加访问修饰符那就默认为default访问修饰符，只能在同一包内可见**

### JAVA方法的四种分类

- 没有返回值没有参数
  - （访问修饰符）+void+方法名			 不需要return
- 没有返回值有参数
  - （访问修饰符）+void+方法名+参数          不需要return
- 有返回值没有参数
  - （访问修饰符）+返回值类型+方法名         return返回值
- 有返回值有参数
  - （访问修饰符）+返回值类型+方法名+参数         return返回值

### 方法重载

**如果在同一个类中，出现了同名的方法，但是参数不同（数量、类型、顺序）称为方法重载**

```java
	void attack() {
		System.out.println("咏春。。。。");
	}
	void attack(String weapon,int a) {
		System.out.println("使用"+weapon+"进行攻击");
	}
	
	void attack(int a,String weapon){
		System.out.println(123456);
	}
```

### 方法重写

在子类和父类中出现了具有相同返回类型、相同方法名、相同参数列表时就构成了方法重写。（**Ps：一定要在重写方法前面加上@Override，并且每次调用一个对象的方法时，都会现在这个类中寻找是否有此方法，如果没有那么会在父类中查找，直到找到为止**）

```java
class Fu {
	void f1() {
		System.out.println("父类f1方法");
	}
}
class Zi extends Fu {
	@Override
	void f1() {
		System.out.println("子类f1方法");
	}
}
public class App {
	public static void main(String[] args) {
		Zi zi = new Zi();
		zi.f1();
	}
}
```



### 构造方法（构造器）

**通过类实例化一个对象的初始工作往往交给构造方法（构造器）**

构造器的特点：

- 构造方法不用声明返回值，连void也不需要写
- 构造方法的名字与类名需要保持完全一致
- 如果我们不定义构造方法，那么JAVA会在底层执行的时候会自动生成一个无参的构造方法
- 如果我们定义了构造方法，那么JAVA底层就不会自动生成无参的构造方法，而是会执行我们定义的构造方法
- 通过new实例化一个对象的时候，类中的构造方法就会执行

```java
class User{
	int id;
	String name;
	
	User(int id,String name){
//		使用this区分实参与形参
		this.id=id;
		this.name =name;
	}
	
	void print() {
		System.out.println(id);
		System.out.println(name);
	}
}

public class App {
	public static void main(String[] args) {
//		以下new User()就是在调用User的构造方法
		User u1=new User(1,"武则天");
		User u2=new User(2,"花木兰");
		User u3=new User(3,"穆桂英");
		
		u1.print();
		u2.print();
		u3.print();
	}
}
```



































