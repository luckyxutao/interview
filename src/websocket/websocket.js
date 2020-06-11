// const { Server } = require('ws');
const Server = require('./ws');
const wss = new Server({ port: 8888 });
wss.on('connection', (socket) => {
    console.log('连接已建立');
    socket.on('message', (message) => {
        console.log('msg',message);
        socket.send(message);
    });
});