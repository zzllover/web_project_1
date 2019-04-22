
# http状态码

1XX：通知，
2XX: 成功，
3XX 重定向，
4XX：客户端错误，
5XX 服务端错误

1. 301 redirect: 301 代表永久性转移(Permanently Moved)
2. 302 redirect: 302 代表暂时性转移(Temporarily Moved ) 302容易出现网址URL 劫持。
http1.1变成Found，响应代码307变成了Temporarily Moved
3. 304 not modified。服务器端允许请求访问资源，但因发生请求未满足条件的情况后，直接返回304Modified（服务器端资源未改变，可直接使用客户端未过期的缓存）。304状态码返回时，不包含任何响应的主体部分。304虽然被划分在3xx类别中，但是和重定向没有关系。
4. 400 bad request：表示请求的报文中存在语法错误，比如url含有非法字符
5. 409("Conflict")你请求的操作会导致服务器的资源处于一种不可能或不一致的状态。
6. 404("Not Found") 和410("Gone")
当客户端所请求的URI不对应于任何资源时，发送此响应代码。404用于服务器端不知道客户端要请求哪个资源的情况；410用于服务器端知道客户端所请求的资源曾经存在，但现在已经不存在了的情况。
7. 500("Internal Server Error")
8. 405 method not allowed：  请求的方式（get、post、delete）方法与后台规定的方式不符合。
9. 403 Forbidden 服务器收到请求，但是拒绝提供服务

400 bad request，请求报文存在语法错误
401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
403 forbidden，表示对请求资源的访问被服务器拒绝
404 not found，表示在服务器上没有找到请求的资源
