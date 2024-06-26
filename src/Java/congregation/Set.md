---
title: Set
order: 4
isTimeLine: true
date: 2024-05-13
---

## 讲讲HashSet的底层实现？

- HashSet 底层就是基于 HashMap 实现的  

  - HashSet 的源码⾮常⾮常少，因为除了clone() 、 writeObject() 、 readObject() 是 HashSet⾃⼰不得不实现之外，其他⽅法都是直接调⽤ HashMap 中的⽅法。  

- HashSet的add方法  

  ```java
      public boolean add(E e) {
          return map.put(e, PRESENT)==null;
      }
  ```

  - 直接调用HashMap的put方法，将添加的元素作为key，new一个Object作为value  

  - 会根据返回值是否为空来判断是否插入元素成功  

    - HashMap的putVal  

      - 进行了一系列判断，最后的结果是，只有在key在table数组中不存在的时候，才会返回插入的值  

        ```java
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null)
            	e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
        ```