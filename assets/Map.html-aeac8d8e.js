import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as h,c as e,f as r}from"./app-0ae1d332.js";const d={},s=r('<h2 id="能说一下hashmap的数据结构吗" tabindex="-1"><a class="header-anchor" href="#能说一下hashmap的数据结构吗" aria-hidden="true">#</a> 能说一下HashMap的数据结构吗？</h2><h2 id="你对红黑树了解多少-为什么不用二叉树-平衡树呢" tabindex="-1"><a class="header-anchor" href="#你对红黑树了解多少-为什么不用二叉树-平衡树呢" aria-hidden="true">#</a> 你对红黑树了解多少？为什么不用二叉树/平衡树呢？</h2><h2 id="红黑树怎么保持平衡的知道吗" tabindex="-1"><a class="header-anchor" href="#红黑树怎么保持平衡的知道吗" aria-hidden="true">#</a> 红黑树怎么保持平衡的知道吗？</h2><h2 id="hashmap的put流程知道吗" tabindex="-1"><a class="header-anchor" href="#hashmap的put流程知道吗" aria-hidden="true">#</a> HashMap的put流程知道吗？</h2><h2 id="hashmap怎么查找元素的呢" tabindex="-1"><a class="header-anchor" href="#hashmap怎么查找元素的呢" aria-hidden="true">#</a> HashMap怎么查找元素的呢？</h2><h2 id="hashmap的哈希-扰动函数是怎么设计的" tabindex="-1"><a class="header-anchor" href="#hashmap的哈希-扰动函数是怎么设计的" aria-hidden="true">#</a> HashMap的哈希/扰动函数是怎么设计的?</h2><h2 id="为什么哈希-扰动函数能降hash碰撞" tabindex="-1"><a class="header-anchor" href="#为什么哈希-扰动函数能降hash碰撞" aria-hidden="true">#</a> 为什么哈希/扰动函数能降hash碰撞？</h2><h2 id="为什么hashmap的容量是2的倍数呢" tabindex="-1"><a class="header-anchor" href="#为什么hashmap的容量是2的倍数呢" aria-hidden="true">#</a> 为什么HashMap的容量是2的倍数呢？</h2><h2 id="如果初始化hashmap-传一个17的值-new-hashmap-它会怎么处理" tabindex="-1"><a class="header-anchor" href="#如果初始化hashmap-传一个17的值-new-hashmap-它会怎么处理" aria-hidden="true">#</a> 如果初始化HashMap，传一个17的值 new HashMap&lt;&gt; ，它会怎么处理？</h2><h2 id="你还知道哪些哈希函数的构造方法呢" tabindex="-1"><a class="header-anchor" href="#你还知道哪些哈希函数的构造方法呢" aria-hidden="true">#</a> 你还知道哪些哈希函数的构造方法呢？</h2><h2 id="解决哈希冲突有哪些方法呢" tabindex="-1"><a class="header-anchor" href="#解决哈希冲突有哪些方法呢" aria-hidden="true">#</a> 解决哈希冲突有哪些方法呢？</h2><h2 id="为什么hashmap链表转红黑树的阈值为8呢" tabindex="-1"><a class="header-anchor" href="#为什么hashmap链表转红黑树的阈值为8呢" aria-hidden="true">#</a> 为什么HashMap链表转红黑树的阈值为8呢？</h2><h3 id="扩容在什么时候呢-为什么扩容因子是0-75" tabindex="-1"><a class="header-anchor" href="#扩容在什么时候呢-为什么扩容因子是0-75" aria-hidden="true">#</a> 扩容在什么时候呢？为什么扩容因子是0.75？</h3><h2 id="hashmap扩容机制了解吗" tabindex="-1"><a class="header-anchor" href="#hashmap扩容机制了解吗" aria-hidden="true">#</a> HashMap扩容机制了解吗？</h2><h2 id="jdk1-8对hashmap主要做了哪些优化呢-为什么" tabindex="-1"><a class="header-anchor" href="#jdk1-8对hashmap主要做了哪些优化呢-为什么" aria-hidden="true">#</a> JDK1.8对HashMap主要做了哪些优化呢？为什么？</h2><h2 id="你能自己设计实现一个hashmap吗" tabindex="-1"><a class="header-anchor" href="#你能自己设计实现一个hashmap吗" aria-hidden="true">#</a> 你能自己设计实现一个HashMap吗？</h2><h2 id="hashmap-是线程安全的吗-多线程下会有什么问题" tabindex="-1"><a class="header-anchor" href="#hashmap-是线程安全的吗-多线程下会有什么问题" aria-hidden="true">#</a> HashMap 是线程安全的吗？多线程下会有什么问题？</h2><h2 id="有什么办法能解决hashmap线程不安全的问题呢" tabindex="-1"><a class="header-anchor" href="#有什么办法能解决hashmap线程不安全的问题呢" aria-hidden="true">#</a> 有什么办法能解决HashMap线程不安全的问题呢？</h2><h2 id="能说一下concurrenthashmap的具体实现吗" tabindex="-1"><a class="header-anchor" href="#能说一下concurrenthashmap的具体实现吗" aria-hidden="true">#</a> 能说一下ConcurrentHashmap的具体实现吗？</h2><h2 id="hashmap-内部节点是有序的吗" tabindex="-1"><a class="header-anchor" href="#hashmap-内部节点是有序的吗" aria-hidden="true">#</a> HashMap 内部节点是有序的吗？</h2><h2 id="讲讲-linkedhashmap-怎么实现有序的" tabindex="-1"><a class="header-anchor" href="#讲讲-linkedhashmap-怎么实现有序的" aria-hidden="true">#</a> 讲讲 LinkedHashMap 怎么实现有序的？</h2><h2 id="讲讲-treemap-怎么实现有序的" tabindex="-1"><a class="header-anchor" href="#讲讲-treemap-怎么实现有序的" aria-hidden="true">#</a> 讲讲 TreeMap 怎么实现有序的？</h2>',22),i=[s];function n(t,c){return h(),e("div",null,i)}const o=a(d,[["render",n],["__file","Map.html.vue"]]);export{o as default};
