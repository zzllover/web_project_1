
# 伪类选择器 --- CSS3新增伪类

E:first-child

意思：只要E元素是它的父级的第一个子元素，就选中。
它需要同时满足两个条件，一个是**第一个子元素**，另一个是**这个子元素刚好是E**。

nth-child()
:nth-last-child
:only-child

p:first-of-type 选择属于其父元素的首个元素的每个元素。
p:last-of-type  选择属于其父元素的最后元素的每个元素。
p:only-of-type  选择属于其父元素唯一的元素的每个元素。
p:only-child    选择属于其父元素的唯一子元素的每个元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个元素。
:enabled  :disabled 控制表单控件的禁用态。
:checked单选框或复选框被选中。
