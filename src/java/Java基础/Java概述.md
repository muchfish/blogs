---
title: 1.Java概述
isTimeLine: true
date: 2024-05-09
---

## Java语言有哪些特点？

- 面向对象
  - 封装
  - 继承
  - 多态
- 平台无关性
- 支持多线程
- 编译与解释并存

## JVM、JDK 和 JRE 有什么区别？

- JVM

  - Java Virtual Machine，Java虚拟机，Java程序运行在Java虚拟机上。针对不同
    系统的实现（Windows，Linux，macOS）不同的JVM，因此Java语言可以实现跨平
    台。  

- JRE
  - Java 运⾏时环境。它是运⾏已编译 Java 程序所需的所有内容的集合，包括Java 虚拟机（JVM），Java 类库，Java 命令和其他的⼀些基础构件。但是，它不能⽤于创建新程序。  
  
- JDK

  - Java Development Kit，它是功能⻬全的 Java SDK。它拥有 JRE 所拥有的⼀
    切，还有编译器（javac）和⼯具（如 javadoc 和 jdb）。它能够创建和编译程序。
    简单来说，JDK包含JRE，JRE包含JVM。  

## 说说什么是跨平台性？原理是什么?

- 跨平台：一次编译，多操作系统运行
- 实现原理：不同系统安装不同Java虚拟机

## 什么是字节码？采用字节码的好处是什么?

- .class文件
- 字节码能够被虚拟机识别，从而实现Java程序的跨平台性
- Java 程序从源代码到运行主要有三步
  - 编译：.java ->.class
  - 解释：虚拟机执行Java字节码，.class -机器码
  - 执行 ：对应的操作系统执行二进制机器码

## 为什么说 Java 语言“编译与解释并存”？

- 因为 Java 程序要经过先编译，后解释两个步骤  
  - 由 Java 编写的程序需要先经过**编译**步骤，生成字节码（ \*.class 文件）  
  - 这种字节码必须再经过JVM，**解释**成操作系统能识别的机器码，再由操作系统执行  

