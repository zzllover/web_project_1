
# html5的WebSocket连接

## 1、什么是WebSocket

WebSocket 是一种自然的全双工、双向、单套接字连接。使用WebSocket，你的HTTP 请求变成打开WebSocket 连接（WebSocket 或者WebSocket over TLS（TransportLayer Security，传输层安全性，原称“SSL”））的单一请求，并且重用从客户端到服务器以及服务器到客户端的同一连接。WebSocket 减少了延迟，因为一旦建立起WebSocket 连接，服务器可以在消息可用时发送它们。例如，和轮询不同，WebSocket只发出一个请求。服务器不需要等待来自客户端的请求。相似地，客户端可以在任何时候向服务器发送消息。相比轮询不管是否有可用消息，每隔一段时间都发送一个请求，单一请求大大减少了延迟。

## 2、WebSocket API

WebSocket API 使你可以通过Web，在客户端应用程序和服务器端进程之间建立全双工的双向通信。WebSocket 接口规定了可用于客户端的方法以及客户端与网络的交互方式。首先，你要调用WebSocket 构造函数（constructor），创建一个WebSocket 连接。构造函数返回WebSocket 对象实例。你可以监听该对象上的事件，这些事件告诉你何时连接打开，何时消息到达，何时连接关闭以及何时发生错误。你可以与WebSocket 对象交互，发送消息或者关闭连接。下面来研究WebSocket API 的各个方面。

## 3、WebSocket 构造函数

为了建立到服务器的WebSocket 连接，使用WebSocket 接口，通过指向一个代表所要连接端点的URL，实例化一个WebSocket对象。WebSocket 协议定义了两种URL 方案（URL scheme）—ws 和wss，分别用于客户端和服务器之间的非加密与加密流量。ws（WebSocket） 方案与HTTP URI 方案类似。wss（WebSocketSecure，WebSocket 安全）URI 方案表示使用传输层安全性（TLS，也叫SSL）的WebSocket 连接，使用HTTPS 采用的安全机制来保证HTTP 连接的安全。WebSocket 构造函数有一个必需的参数URL（指向连接目标的URL）和一个可选参数protocols（为了建立连接，服务器必须在其响应中包含的一个或一组协议名称）。在protocols 参数中可以使用的协议包括XMPP（eXtensible Messaging and PresenceProtocol， 可扩展消息处理现场协议）、SOAP（Simple ObjectAccess Protocol，简单对象访问协议）或者自定义协议。

```js
var ws = new WebSocket("ws://www.websocket.org");
```

带有协议支持的WebSocket 构造函数示例

```js
// Connecting to the server with multiple protocol choices
var echoSocket = new WebSocket("ws://echo.websocket.org", ["com.kaazing.echo",
"example.imaginary.protocol"])
echoSocket.onopen = function(e) {
    // Check the protocol chosen by the server
    console.log(echoSocket.protocol);
}
```

由于WebSocket 服务器ws://echo.websocket.org 只理解com.kaazing.echo 协议， 而不理解example.imaginary.protocol，该服务器在触发WebSocket open 事件的时候选择com.kaazing.echo 协议。使用数组为你提供了让应用程序对不同服务器使用不同协议的灵活性。

## 4、WebSocket 事件

WebSocket API 是纯事件驱动的。应用程序代码监听WebSocket对象上的事件，以便处理输入数据和连接状态的改变。WebSocket协议也是事件驱动的。客户端应用程序不需要轮询服务器来得到更新的数据。消息和事件将在服务器发送它们的时候异步到达。WebSocket 编程遵循异步编程模式，也就是说，只要WebSocket连接打开，应用程序就简单地监听事件。客户端不需要主动轮询服务器得到更多的信息。要开始监听事件，只要为WebSocket 对象添加回调函数。也可以使用addEventListener() DOM 方法为WebSocket 对象添加事件监听器。

WebSocket 对象调度4 个不同的事件：
open
message
error
close
和所有Web API 一样，可以用on< 事件名称> 处理程序属性

监听这些事件，也可以使用addEventListener(); 方法。

### 4.1、WebSocket 事件：open

一旦服务器响应了WebSocket 连接请求，open 事件触发并建立一个连接。open 事件对应的回调函数称作onopen。

```js
ws.onopen = function(e) {
    console.log("Connection open...");
};
```

### 4.2、WebSocket messagess事件

WebSocket 消息包含来自服务器的数据。你也可能听说过组成WebSocket 消息的WebSocket 帧（Frame）。message 事件在接收到消息时触发，对应于该事件的回调函数是onmessage。

```js
ws.onmessage = function(e) {
    if(typeof e.data === "string"){
        console.log("String message received", e, e.data);
    } else {
        console.log("Other message received", e, e.data);
    }
};
```

除了文本，WebSocket 消息还可以处理二进制数据，这种数据作为Blob 消息或者ArrayBuffer 消息处理。因为设置WebSocket 消息二进制数据类型的应用程序会影响二进制消息，所以必须在读取数据之前决定用于客户端二进制输入数据的类型。

```js
ws.binaryType = "blob";
// Event handler for receiving Blob messages
ws.onmessage = function(e) {
    if(e.data instanceof Blob){
        console.log("Blob message received", e.data);
        var blob = new Blob(e.data);
    }
ws.binaryType = "arraybuffer";
// Event handler for receiving ArrayBuffer messages
ws.onmessage = function(e) {
    if(e.data instanceof ArrayBuffer){
        console.log("ArrayBuffer Message Received", + e.data);
        // e.data is an ArrayBuffer. Create a byte view of that object.
        var a = new Uint8Array(e.data);
    }
};
```

### 4.3、 WebSocket 事件：error

error 事件在响应意外故障的时候触发。与该事件对应的回调函数为onerror。错误还会导致WebSocket 连接关闭。如果你接收一个error 事件，可以预期很快就会触发close 事件。close 事件中的代码和原因有时候能告诉你错误的根源。error事件处理程序是调用服务器重连逻辑以及处理来自WebSocket 对象的异常的最佳场所。

```js
ws.onerror = function(e){
    console.log('websocked error');
    handerError();
}
```

### 4.4、 WebSocket 事件：close

close 事件在WebSocket 连接关闭时触发。对应于close 事件的回调函数是onclose。一旦连接关闭，客户端和服务器不再能接收或者发送消息。

```js
ws.onclose = function(e) {
    console.log("Connection closed", e);
};
```

WebSocket close 事件在连接关闭时触发，这可能有多种原因，比如连接失败或者成功的WebSocket 关闭握手。WebSocket 对象特性readyState 反映了连接的状态（2 为正在关闭，3 为已关闭）。

close 事件有3 个有用的属性（property），可以用于错误处理和恢复：wasClean、code 和error。wasClean 属性是一个布尔属性，表示连接是否顺利关闭。如果WebSocket 的关闭是对来自服务器的一个close 帧的响应，则该属性为true。如果连接是因为其他原因（例如，因为底层TCP 连接关闭）关闭，则该属性为false。code 和reason 属性表示服务器发送的关闭握手状态。这些属性和WebSocket.close() 方法中的code 和reason 参数一致。

## 5、WebSocket 方法

使用WebSocket 在客户端和服务器之间建立全双工双向连接后，就可以在连接打开时（也就是说，在调用onopen 监听器之后，调用onclose 监听器之前）调用send() 方法。使用send() 方法可以从客户端向服务器发送消息。在发送一条或者多条消息之后，可以保持连接打开，或者调用close() 方法终止连接。

```js
ws.send("Hello WebSocket!");
```

send() 方法在连接打开的时候发送数据。如果连接不可用或者关闭，它抛出一个有关无效连接状态的异常。人们开始使用WebSocket API 时常犯的一个错误是试图在连接打开之前发送消息。

```js
// Wait until the open event before calling send().
var ws = new WebSocket("ws://echo.websocket.org")
ws.onopen = function(e) {
    ws.send("Initial data");
}
```

如果想发送消息响应另一个事件， 可以检查WebSocketreadyState 属性，并选择只在套接字打开时发送数据。

```js
function myEventHandler(data) {
    if (ws.readyState === WebSocket.OPEN) {
        // The socket is open, so it is ok to send the data.
        ws.send(data);
    } else {
        // Do something else in this case.
        //Possibly ignore the data or enqueue it.
    }
}
```

除了文本（字符串）消息之外，WebSocket API 允许发送二进制数据，这对于实现二进制协议特别有用。这样的二进制协议可能是TCP 上层的标准互联网协议，这些协议的载荷可能是Blob 或ArrayBuffer。

### 5.2、WebSocket 方法：close()

使用close() 方法， 可以关闭WebSocket 连接或者终止连接尝试。如果连接已经关闭，该方法就什么都不做。在调用close() 之后，不能在已经关闭的WebSocket 上发送任何数据。可以向close() 方法传递两个可选参数：code（数字型的状态代码）和reason（一个文本字符串）。传递这些参数能够向服务器传递关于客户关闭连接原因的信息。

## 6、WebSocket 对象特性

可以使用多种WebSocket 对象特性提供关于WebSocket 对象的更多信息：readyState、bufferedAmount 和protocol。

### 6.1、WebSocket 对象特性：readyState

特性常量	取值	状态
WebSocket.CONNECTING	0	连接正在进行中，但还未建立
WebSocket.OPEN	1	连接已经建立。消息可以在客户端和服务器之间传递
WebSocket.CLOSING	2	连接正在进行关闭握手
WebSocket.CLOSED	3	连接已经关闭，不能打开

### 6.2、WebSocket 对象特性：bufferedAmount

设计应用程序时，你可能想要检查发往服务器的缓冲数据量，特别是在客户端应用程序向服务器发送大量数据的时候。尽管调用send() 是立即生效的，但是数据在互联网上的传输却不是如此。浏览器将为你的客户端应用程序缓存出站数据，从而使你可以随时调用send()，发送任意数量的数据。然而，如果你想知道数据在网络上传送的速率，WebSocket 对象可以告诉你缓存的大小。你可以使用bufferedAmount 特性检查已经进入队列，但是尚未发送到服务器的字节数。这个特性报告的值不包括协议组帧开销或者操作系统、网络硬件所进行的缓冲。

代码展示一个使用bufferedAmount 特性每秒发送更新的例子。如果网络无法承受这一速率，它会相应地作出调整。

```js
// 10k max buffer size.
var THRESHOLD = 10240;
// Create a New WebSocket connection
var ws = new WebSocket("ws://echo.websocket.org/updates");
// Listen for the opening event
ws.onopen = function () {
    // Attempt to send update every second.
    setInterval( function() {
        // Send only if the buffer is not full
        if (ws.bufferedAmount < THRESHOLD) {
            ws.send(getApplicationState());
        }
    }, 1000);
};
```

对于限制应用向服务器发送数据的速率，从而避免网络饱和，bufferedAmount 特性很有用。

### 6.3、 WebSocket 对象特性：protocol

在前面关于WebSocket 构造函数的讨论中， 我们提到了protocol 参数，它让服务器知道客户端理解并可在WebSocket上使用的协议。WebSocket 对象的protocol 特性提供了另一条关于WebSocket 实例的有用信息。客户端和服务器协议协商的结果可以在WebSocket 对象上看到。protocol 特性包含在打开握手期间WebSocket 服务器选择的协议名，换句话说，protocol特性告诉你特定WebSocket 上使用的协议。protocol 特性在最初的握手完成之前为空，如果服务器没有选择客户端提供的某个协议，该特性保持空值。

```html
<!DOCTYPE html>
<title>WebSocket Echo Client</title>
<h2>Websocket Echo Client</h2>
<div id="output"></div>
<script>
// Initialize WebSocket connection and event handlers
function setup() {
    output = document.getElementById("output");
    ws = new WebSocket("ws://echo.websocket.org/echo");
    // Listen for the connection open event then call the sendMessage function
    ws.onopen = function(e) {
        log("Connected");
        sendMessage("这是发送的数据")
    }
    // Listen for the close connection event
    ws.onclose = function(e) {
        log("Disconnected: " + e.reason);
    }
    // Listen for connection errors
    ws.onerror = function(e) {
        log("Error ");
    }
    // Listen for new messages arriving at the client
    ws.onmessage = function(e) {
        log("Message received: " + e.data);
    // Close the socket once one message has arrived.
        ws.close();
    }
}
// Send a message on the WebSocket.
function sendMessage(msg){
    ws.send(msg);
    log("Message sent");
}
// Display logging information in the document.
function log(s) {
    var p = document.createElement("p");
    p.style.wordWrap = "break-word";
    p.textContent = s;
    output.appendChild(p);
    // Also log information on the javascript console
    console.log(s);
}
// Start running the example.
setup();
</script>
</html>
```

## 7、WebSocket 浏览器兼容性检测

```js
if (window.WebSocket){
    console.log("This browser supports WebSocket!");
} else {
    console.log("This browser does not support WebSocket.");
}
```

## 8、在WebSocket 中使用HTML5 媒体

作为HTML5 和Web 平台的一部分，WebSocket API 可以很好地和所有HTML5 特性（feature）配合。这个API 所能发送和接收的数据类型广泛地用于传输应用程序数据和媒体。字符串当然可以表示XML 和JSON 等Web 数据格式。二进制类型可以和拖放（Drag-and-Drop）、FileReader、WebGL 和Web Audio API 等集成。我们来看看如何结合WebSocket 使用HTML5 媒体。代码清单展示了一个结合WebSocket 使用HTML5 媒体的完整客户端应用程序。

你可以根据这些代码创建自己的HTML 文件。

```html
<!DOCTYPE html>
<title>WebSocket Image Drop</title>
<h1>Drop Image Here</h1>
<script>
// Initialize WebSocket connection
var wsUrl = "ws://echo.websocket.org/echo";
var ws = new WebSocket(wsUrl);
ws.onopen = function() {
    console.log("open");
}
// Handle binary image data received on the WebSocket
ws.onmessage = function(e) {
    var blob = e.data;
    console.log("message: " + blob.size + " bytes");
    // Work with prefixed URL API
    if (window.webkitURL) {
        URL = webkitURL;
    }
    var uri = URL.createObjectURL(blob);
    var img = document.createElement("img");
    img.src = uri;
    document.body.appendChild(img);
}
// Handle drop event
document.ondrop = function(e) {
    document.body.style.backgroundColor = "#fff";
    try {
        e.preventDefault();
        handleFileDrop(e.dataTransfer.files[0]);
        return false;
    } catch(err) {
        console.log(err);
    }
}
// Provide visual feedback for the drop area
document.ondragover = function(e) {
    e.preventDefault();
    document.body.style.backgroundColor = "#6fff41";
}
document.ondragleave = function() {
    document.body.style.backgroundColor = "#fff";
}
// Read binary file contents and send them over WebSocket
function handleFileDrop(file) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function() {
        console.log("sending: " + file.name);
        ws.send(reader.result);
    }
}
</script>
</html>
```

## 抄袭来源

<https://www.cnblogs.com/shizhouyu/p/4975409.html>
