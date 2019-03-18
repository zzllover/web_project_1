
# Ajax原理

Ajax技术核心就是XMLHttpRequest对象。
Ajax技术的工作原理：可以分成3步
1.创建Ajax对象：var xhr = new XMLHttpRequest();
2.xhr 发送请求：xhr.open('get','test.html','true');
                          xhr.send();
3.xhr获取响应：
  xhr.onreadystatechange = function(){
    if(xhr.readystate == 4){//请求的状态码
      /*
      0:请求还没有建立（open执行前）
      1：请求建立了还没发送（执行了open）
      2：请求正式发送（执行了send）
      3：请求已受理，有部分数据可以用，但还没有处理完成
      4：请求完全处理完成
      */
          alert(xhr.responseText);//返回的数据
      }
  }
可以看到，send()前是open()