var websocket = require("./app");

websocket.listen(9999,"localhost",function(conn){
	console.log("connection opened");
	conn.on("data",function(opcode,data){
		console.log("message:",data);
		conn.send(data);
	});

	conn.on("close",function(code,reason){
		console.log("connection close:",code,reason);
	})
})