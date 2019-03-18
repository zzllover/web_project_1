
# DNS

DNS就是将域名翻译成IP地址。（只是翻译，而非相互转换）

基于UDP，但是当请求字节过长超过512字节时用TCP协议，将其分割成多个片段传输。

DNS协议默认端口号是53。

操作系统的DNS缓存：windows DNS缓存的默认值是 MaxCacheTTL，它的默认值是86400s，也就是一天。macOS 严格遵循DNS协议中的TTL。
游览器的DNS缓存：chrome对每个域名会默认缓存60s；IE将DNS缓存30min；Firefox默认缓存时间只有1分钟；Safari约为10S。