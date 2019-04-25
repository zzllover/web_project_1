
# iframe

iframe有那些缺点？

iframe会阻塞主页面的Onload事件；
iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的**并行加载**。

使用iframe之前需要考虑这两个缺点。
如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以可以绕开以上两个问题。
