function socket() {
    var app = require('express')();
    var server = require('http').createServer(app);
    var io = require('socket.io')(server);
// var router = express.Router();
    var db = require("../lib/db.js");
    var cheerio = require('cheerio');
    io.on('connection', function(socket) {
        // console.log(socket.id);
        //发送socket信息的逻辑写在这里
        /* … */
        //监听
        //socket.on();
        //发送
        //      setInterval(()=>{
        //          socket.emit('getServerMessage',parseInt(Math.random()*100));
        //      },1000)
        socket.on("sendMessageToServer", function(data) {
            console.log(data.name);
                // $a = data.slice(0, 2);
                // $b = data.slice(2, 3);
                // $c = data.slice(3, 6);
                  db.query(function(db){
                   db.collection("liuyan").insert([
                    data], function(err, result) {
                   
                    console.log(result)
             });

        });
            //公聊
            io.sockets.emit("sendMessageToAllClient", data)
            //私聊
            //io.sockets.sockets[socketid].emit
        })
    });
    server.listen(3001);
}

module.exports = {
    socket
}