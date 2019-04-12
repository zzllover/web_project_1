
# document的一些注意点

请指出document load和document ready的区别？
共同点：这两种事件都代表的是页面文档加载时触发。

异同点：
ready 事件的触发，表示**文档结构**已经加载完成（不包含图片等非文字媒体文件）。
onload 事件的触发，表示页面包含图片等文件在内的**所有元素**都加载完成。

## dom键盘事件

keydown、keypress、keyup三个事件

## document.readyState

1-LOADING：加载程序进行中，但文件尚未开始解析。
2-LOADED：部分的文件已经加载且进行解析，但对象模型尚未生效。
3-INTERACTIVE：仅对已加载的部分文件有效，在此情况下，对象模型是有效但只读的。
4-COMPLETED：文件已完全加载，代表加载成功
