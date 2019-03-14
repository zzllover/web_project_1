# BFC原理

## 1

1）BFC = block formatting context(块级格式化上下文)。具有BFC特性的元素可以看作是隔离了的独立容器，
容器里面的元素不会在布局上影响带外面的元素，并且BFC具有普通容器没有的一些特征。

2）满足BFC特征的条件（满足一个即可）

  1. body根元素

  2. 浮动元素：float属性为除none以外的值

  3. 绝对定位元素： position属性的值(absolute、fixed)

  4. display 为 inline-block、table-cell、table-caption、flex 、 inline-flex、grid 、 inline-grid 、 flow-root 可以创建新的BFC。

  5. overflow 除了 visible 以外的值 (hidden、auto、scroll)

3)BFC特征

  1. 同一个BFC边距（margin）会发生折叠：即两个margin为100px的div,实际加起来只有100。解决外边距的重叠，可以使两个div放置于
  不同的BFC容器中

  2. BFC可以包含浮动元素：
    即浮动问题出现在BFC容器之中，在该容器之中出现的浮动可以，在该容器中解决问题

  3. BFC可以阻止元素被浮动元素覆盖:
  被浮动元素阻挡的块，如果触发BFC元素，则可以不被遮挡：触发机制  overflow:hidden