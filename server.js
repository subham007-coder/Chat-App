const express = require('express');

const app = express();

const http = require("http").createServer(app);

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Listing on port http://localhost:${PORT}`);
});

app.use(express.static(__dirname + "/public"));

app.get("/chat", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// register
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/register.html');
});

// Socket

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (msg) => {
    socket.broadcast.emit('message', msg);
  });
  
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
