#!/usr/bin/env node
import WebSocket from 'ws';
import chokidar from 'chokidar';

console.log("watch folder: ", process.cwd());

const websocketServer = new WebSocket.Server({ port: 6699 });
let websocket;
chokidar.watch(process.cwd()).on('all', (event, path) => {
    if(websocket) {
        console.log("WS");
        console.log("event ", event);
        websocket.send("reload");
    }
});
websocketServer.on('connection', (ws) => {
    websocket = ws;
});