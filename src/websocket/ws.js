const net = require('net');
const { EventEmitter } = require('events');
const { getLength, maskBuffer, getHeaders, toAcceptKey } = require('./utils');
const OP_CODES = {
    TEXT: 1,
    BINARY: 2
};

class Server extends EventEmitter {
    constructor(options) {
        super(options);
        this.options = options;
        //创建tcp链接
        this.server = net.createServer(this.listener);
        this.server.listen(options.port || 8888);
    }
    listener = (socket) => {
        socket.setKeepAlive(true);
        socket.send = function (payload) {
            let _opcode;
            if (Buffer.isBuffer(payload)) {
                _opcode = OP_CODES.BINARY;
            } else {
                _opcode = OP_CODES.TEXT;
                payload = Buffer.from(payload);
            }
            let length = payload.length;
            let buffer = Buffer.alloc(2 + length);
            buffer[0] = 0b10000000 | _opcode;
            buffer[1] = length;
            payload.copy(buffer, 2);
            socket.write(buffer);
        }
        socket.on('data', chunk => {
            //客户端请求升级协议
            if (chunk.toString().match(/Upgrade: websocket/)) {
                this.upgradeProtocol(socket, chunk.toString());
            } else {
                this.onmessage(socket,chunk);
            }
        });
        this.emit('connection', socket);
    }

    onmessage = (socket, chunk) => {
        let FIN = (chunk[0] & 0b10000000) === 0b10000000;//判断是否是结束位,第一个bit是不是1
        let opcode = chunk[0] & 0b00001111;//取一个字节的后四位,得到的一个是十进制数
        let masked = (chunk[1] & 0b10000000) === 0b10000000;//第一位是否是1
        let payloadLength = chunk[1] & 0b01111111;//取得负载数据的长度
        let payload;
        if (masked) {
            let masteringKey = chunk.slice(2, 6);//掩码
            payload = chunk.slice(6);//负载数据
            maskBuffer(payload, masteringKey);//对数据进行解码处理
        }
        if (FIN) {
            switch (opcode) {
                case OP_CODES.TEXT:
                    socket.emit('message', payload.toString());
                    break;
                case OP_CODES.BINARY:
                    socket.emit('message', payload);
                    break;
                default:
                    break;
            }
        }
    }

    upgradeProtocol = (socket, chunk) => {
        let headers = getHeaders(chunk);
        let wsKey = headers['Sec-WebSocket-Key'];
        let resKey = toAcceptKey(wsKey);
        let response = [
            'HTTP/1.1 101 Switching Protocols',
            'Upgrade: websocket',
            'Connection: Upgrade',
            `Sec-WebSocket-Accept: ${resKey}`,
            '\r\n'
        ].join('\r\n');
        socket.write(response);
    }
}

module.exports = Server;
