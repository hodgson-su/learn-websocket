### WebSocket事件
1.open
2.message
3.error
4.close
- open事件
```
ws.onopen = function(e){
    console.log("Connection open...");
}
```
到open事件触发时，协议握手已经完成，WebSocket已经准备好发送和接收数据。如果应用程序接收到一个open事件，那么可以确定WebSocket服务器成功地处理了连接请求，并且同意与应用程序通信。
- message
message事件在接收到消息时触发，对应于该事件的回调函数是onmessage
```
ws.onmessage = function(e){
    if(typeof e.data === "string"){
        console.log("String message received",e,e.data);
    }else{
        console.log("Other message received",e,e.data);
    }
}
```
Blob消息message事件处理程序示例
```
ws.binaryType = "blob";
ws.onmessage = function(e){
    if(e.data instanceof Blob){
        console.log("Blob message received",e.data);
        var blob = new Blob(e.data);
    }
}
```
ArrayBuffer消息message事件处理示例程序示例
```
ws.binaryType = "arraybuffer";
ws.onmessage = function(e){
    if(e.data instanceof ArrayBuffer){
        console.log("ArrayBuffer Message Received",+e.data);
        var a = new Uint8Array(e.data);
    }
}
```
- error
error事件在响应意外故障时触发。与该事件对应的回调函数为onerror。错误还会导致WebSocket关闭连接。如果你接收一个error事件，可以预期很快就会触发close事件。
error事件处理程序示例
```
ws.onerror = function(e){
    console.log("WebSocket Error:",e);
    handleErrors(e);
}
```
- close
close事件在WebSocket连接关闭时触发
### WebSocket对象特性
- readyState
报告连接状态。
- bufferedAmount
缓存大小。可以使用bufferedAmount特性检查已经进入队列，但是尚未发送到服务器的字节数。这个特性报告的值不包括协议组帧开销或者操作系统、网络硬件所进行的缓冲。
```
var THRESHOLD = 10240;
var ws = new WebSocket("ws://echo.websocket.org/updates");
ws.onopen = function(){
    setInterval(function(){
        if(ws.bufferedAmount < THRESHOLD){
            ws.send(getApplicationState());
        }
    })
}
```
- protocal
让服务器知道客户端理解并可在WebSocket上使用的协议。

### 使用WebSocket API的完整客户端应用程序
```
具体查看demo1.html
```
确定浏览器WebSocket支持的客户端代码
```
if(window.WebSocket){
    console.log("This browser supports WebSocket!");
}else{
    console.log("This browser does not support WebSocket");
}
```

### 在WebSocket中使用HTML5媒体
