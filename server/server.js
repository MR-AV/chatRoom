const express = require('express');
const socketio = require("socket.io");
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;
const {addUser, removeUser, getUser, getUsersInRoom} = require("./users");



io.on('connection', (socket) => {
    console.log("New User Has connected !!!")
  
    socket.on('join',({name : roomName, username :userName}, callback)  => {

        const {error, user} = addUser({id : socket.id, roomName, userName});
        
        if(error){
            return callback(error);
        }
       
        socket.emit('message',{user : "admin", text : `${user.userName}, Welcome to the room ${user.roomName}`});
        socket.broadcast.to(user.roomName).emit('message', {user : "admin", text : `${user.userName}, has joined!`} )
        socket.join(roomName);
        // to display the no. of users present in a room
        io.to(user.roomName).emit('roomData', {users : getUsersInRoom(user.roomName)})
        callback();
        
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        console.log("user = ", user);
        
        io.to(user.roomName).emit('message', {user : user.userName, text : message});
        callback();
    })

    socket.on('disconnect', () => {
        console.log("user Disconnected");
        const user = removeUser(socket.id);
        if(user){
            io.to(user.roomName).emit('message', {user : 'admin', text : `${user.userName} has Left!!`});
        }
    })
})


server.listen(PORT, () => console.log("server has started on port 5000"));

