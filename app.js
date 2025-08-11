const express = require('express');
const app = express();
const http = require("http");
const path = require('path');
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

// ✅ Static folder serve karna
app.use(express.static(__dirname + '/public'));


// View engine set
app.set("view engine", "ejs");

// Socket.IO connection
io.on("connection", function (socket) {
    console.log("User connected:", socket.id);

    // Location receive
    socket.on("send-location", function (data) {
        // Sab clients ko bhejo
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", function () {
        console.log("User disconnected:", socket.id);
    });
});

// Routes
app.get("/", function (req, res) {
    res.render("index");
});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});

