import React from 'react';

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

io.on('connection', (socket: any) => {
    console.log(`SocketId ${socket.id}`)
});

http.listen(port, () => {
    console.log(`Listening on port ${port}`)
});