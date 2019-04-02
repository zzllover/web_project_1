
# Ajax工作原理

异步/回调/线程

Ajax是告诉浏览器给我要发送一个**HTTP请求**，你给我新开个**线程**去执行下，完事后告诉我一声，我在其他function中执行后续操作**回调**。在线程返回结果前，我可以继续做其他事情。**异步**

## 工作原理

1. 创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）；
2. 向服务器发送请求：选择数据传输方式(GET/POST)----》打开链接 open()-----》发送 send()；
3. 当 readyState 等于 4 且状态为 200 时，表示响应已就绪，可以执行回调函数。

## Ajax代码实现

```js
if(window.XMLHttpRequest == undefined){
  window.XMLHttpRequest = function(){
    try{
      return new ActiveXobject("Msxml2.XMLHttp.6.0");
    }
  }
}

function xhrGet(url,callback){
  var request = new XMLhttpRequest();
  request.open('GET',url,true);
  request.onreadyStatechange = function(){
    if(request.readyState ===4 && request.status ==200){
      callback&&callback(request.responseText);
    }
  };
  request.send(null)
}

function xhrPost(url,data,callback){
  var request = new XMLHttpRequest();//创建Ajax对象
  request.open('POST',url,true);//将请求发送到服务器，
                                //使用 XMLHttpRequest 对象的 open() 和 send() 方法
  request.setRequestHeader('Content-Type','application/json');
  request.onreadyStateChange = function(){
    if(request.readyState ===4 && request.status ==200){
      callback&&callback(request);
    }
  }
  request.send(JSON.stringfy(data))//数据在这里
}
```
