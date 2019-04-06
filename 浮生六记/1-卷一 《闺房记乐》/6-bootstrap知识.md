# bootstrap

（1）行必须包括在固定宽度的容器中，分为12个单位
（2）你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
（3）类似 .row 和 .col-xs-4 这种预定义的类，可以用来快速创建栅格布局。
（4）通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。
（5）如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
（6）栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。

col-md-8 col-xs-12

- .col-xs- 超小屏幕 手机 <768px
- .col-sm- 小屏幕 平板  >=768px
- .col-md- 中等屏幕  >=992px
- .col-lg- 大屏幕  >1200px

## 导航

让导航栏固定在页面的顶部，请向  .navbar class  添加 class  .navbar-fixed-top ;
让导航栏固定在页面的底部，请向  .navbar class  添加 class  .navbar-fixed-bottom 。
使用实用工具 class  .navbar-left  或  .navbar-right  向左或向右对齐导航栏中的导航链接、按钮或者文本  这些组件。
基本的表单结构是 Bootstrap 自带的，个别的表单控件自动接收一些全局样式。
向父form元素添加role=”form“
响应式导航需要当前版本bootstrap的collapse插件
