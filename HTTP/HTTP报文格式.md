## HTTP报文
  请求报文：
    起始行  GET /test/hi-there.txt HTTP/1.0
    头部    Accept: text/*
           Accept-Language: en, fr

  响应报文：
    起始行   HTTP/1.0 200 OK
    头部     Content-type: text/plain
            Content-length: 19
    空行        
    主体     Hi! I'm a message!

## HTTP方法
  定义对于资源的操作

## HTTP Code
  定义服务器对请求的处理结果