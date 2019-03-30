# XHTML与HTML最主要的区别

XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。
XHTML标签名必须用小写字母。
XHTML 文档必须拥有根元素。

## HTML5

HTML5是很有野心的下一代标准，它已经远远超越了标记语言的范畴，其背后是一组技术集。
最基本的就是更富语义的标签，以便更好的被机器识别；
Canvas+WEBGL等技术，实现无插件的动画以及图像、图形处理能力；
本地存储，可实现offline应用；
websocket，一改http的纯pull模型，实现数据推送的梦想；
MathML，SVG等，支持更加丰富的render；
对跨浏览器的推动。

## H5新标签，新的API,新的属性

### 新增表单元素

### 新标签

```html
<video>
<video width="320" height="240" controls="controls">
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>


<audio>
<audio src="/i/song.ogg" controls="controls">
Your browser does not support the audio element.
</audio>
<!-- audio 元素允许多个 source 元素。
source 元素可以链接不同的音频文件。浏览器将使用第一个可识别的格式-->
<audio controls="controls">
  <source src="song.ogg" type="audio/ogg">
  <source src="song.mp3" type="audio/mpeg">
Your browser does not support the audio tag.
</audio>
```

### 新的属性

#### classList

H5新增的**classList**属性
可以通过原生js可以通过它来判断获取dom节点有无某个class。

classList是html元素对象的成员，它的使用非常简单，比如

```html
<p id="cs" class="a b c"></p>
```

```js
  let myP = document.getElementById("cs")
  console.log(myP.classList); //DOMTAKENList(2)
```

目前已知classList **API**有:length,item,add,remove,toggle,contains

**length**
静态属性。可以获取元素类名的个数，使用方式：

```js
  let myP = document.getElementById("cs")
  console.log(myP.classList.length);//2
```

**item( Number )**
方法。可以获取元素的类名，接受一个参数，即数字索引。使用方式：

```js
  //如果index超出范围，则返回null
  let myP = document.getElementById("cs")
  console.log(myP.classList.item(1));//b
```

**add( String [, String] )**
方法。可以给元素添加类名，就像jquery中的addClass()。使用方式：

```js
  //如果index超出范围，则返回null
  let myP = document.getElementById("cs")
  myP.classList.add('myclass');//一次仅能加入一个
  myP.classList.add("d","e");//增加多个
```

**remove( String [,String] )**
方法。可以将元素的类名删除，就像jquery中的removeClass()。和add()方法一样，一次只能删除一个类名。使用方式：

```js
  //如果index超出范围，则返回null
  let myP = document.getElementById("cs")
  myP.classList.remove('myclass');//一次只能删除一个类名
  myP.classList.remove("d","e");
```

**toggle( String [, force] )**
方法。可以给元素交替增加类名和删除类名，就像jquery中的toggleClass()。
当只有一个参数时：切换 class value，即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。
当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它。
使用方式：

```js
  //如果index超出范围，则返回null
  let myP = document.getElementById("cs")
  myP.classList.toggle('myclass');//
```

**contains( String )**
方法。可以检测判断元素是否包含某个类名，返回false或true。使用方式：

```js
  //如果index超出范围，则返回null
  let myP = document.getElementById("cs")
  myP.classList.contains('myclass');//返回true或者false
```

#### data-*属性

data-*属性能让用户自定义属性的方式来存储数据

```html
<span data-order-amount=100></span>
```

取值：
getAttribute('data-order-amount')
dataset.orderAmount
jQuery中的data()方法同样可以访问

使用jQuery与javascript添加与获取data属性示例：

#### draggable属性

规定元素是否可拖拽
3个枚举值
true 规定元素是可拖动的。
false 规定元素是不可拖动的。
auto 使用浏览器的默认特性。

### 选择器

**querySelector()**和**querySelectorAll()**，
参数都是css选择器，前者返回符合条件的第一个匹配的元素，
如果没有则返回Null，后者返回符合筛选条件的所有元素集合，
如果没有符合筛选条件的则返回空数组。
