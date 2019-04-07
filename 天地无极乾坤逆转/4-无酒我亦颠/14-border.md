
# border

border:none以及border:0的区别

当定义了border:none，即隐藏了边框的显示，实际就是边框宽度为0
浏览器对border-width、border-color进行渲染，占用内存。
当定义边框时，仅设置边框宽度也可以达到显示的效果
浏览器不进行渲染，不占用内存