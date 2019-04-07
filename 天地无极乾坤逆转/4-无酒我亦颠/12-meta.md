
# 关于meta标签

1
meta：
name="viewport"
content=
"width=device-width; // 强制让文档的宽度与设备的宽度保持1:1，
initial-scale=1.0;  // 文档初始化缩放比例是1:1，
maximum-scale=1.0; // 允许用户缩放到的最大比例，
user-scalable=0;" // 不允许用户点击屏幕放大浏览，【用户是否可以手动缩放】

// 尤其要注意的是content里多个属性的设置一定要用逗号+空格来隔开，如果不规范将不会起作用。
其他属性有：width;height; initial-scale; minimum-scale; maximum-scale; user-scalable;

2  meta name="apple-mobile-web-app-capable" content="yes"
 //**iPhone**私有标签，它表示：允许**全屏模式浏览**
3 meta name="apple-mobile-web-app-status-bar-style" content="black"
//**iPhone**私有标签，它指定的iPhone中safari顶端的**状态条的样式**
4  meta name="format-detection" content="telephone=no; email=no"
 //不识别**邮件**和不把数字识别为电话号码 //移动端

**响应式**网页设计就是一个网站能够兼容多个终端——而不是为每个终端做一个特定的版本。这样，我们就可以不必为不断到来的新设备做专门的版本设计和开发了。