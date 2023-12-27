require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin:"*"
  }
});



io.on("connection", (socket) => {
  console.log("a new user connected");
  

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("hello");
});

server.listen(port, () => console.log(`server running @ ${port}`));
