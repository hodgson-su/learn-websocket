1.以JavaScript和Node.js编写的示例WebSocket服务器
2.WebSocket握手建立WebSocket连接的方法、消息的编码和解码方式
3.持续连接和关闭连接的手段
4.使用示例WebSocket服务器同时远程控制多个浏览器

## WebSocket协议之前
- 历史
最早的Web应用程序使用表单和全页刷新。每当用户提交信息，浏览器将提交一个表单并读取新页面。每当有需要显示的更新信息，用户或者浏览器必须刷新整个页面，使用HTTP读取整个资源。
- Web应用程序的互联网能力
WebSocket为Web应用程序保留了HTTP特性（URL、HTTP安全性、更简单的基于数据模型的消息和内置的文本支持），同时提供了其他网络架构和通信模式。
WebSocket是消息协议、聊天、服务器通知、管道和多路复用协议、自定义协议、紧凑二进制协议和用于与互联网服务器互操作的其他标准协议的很好基础。
TCP、HTTP和WebSocket的对比
特性               TCP                 HTTP             WebSocket
寻址               IP地址和端口        URL              URL
并发传输           全双工              半双工           全双工
内容               字节流              MIME消息         文本和二进制消息
消息定界           否                  是               是
链接定向           是                  否               是

## 用Node.js编写JavaScript WebSocket服务器
