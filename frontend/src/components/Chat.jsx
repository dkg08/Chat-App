import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Chat({ socket, user, roomId }) {
  const [currentMessage, setCurrentMessage] = useState(null);
  const [messageList, setMessageList] = useState([]);

  async function sendMessage() {
    setMessageList((prev) => setMessageList([...prev, currentMessage]));
    await socket.emit("chat message", JSON.stringify(currentMessage));
    setCurrentMessage("");
    console.log(currentMessage, "curr msg");
    console.log(messageList, "list");
  }

  useEffect(() => {
    socket.on("receive msg", (msg) => {
      setMessageList((prev) => [...prev, msg]);
    });
  }, [socket]);

  return (
    <div className="chatWindow">
      <div className="topSection">Chat App ({user})</div>
      <div className="messageSection"></div>
      <div className="bottomSection">
        <input
          type="text"
          placeholder="message"
          style={{
            height: "100%",
            width: "81.3%",
            padding: "6px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            color: "grey",
          }}
          onInput={(e) => {
            const message = {
              user,
              message: e.target.value,
              roomId,
            };
            setCurrentMessage(message);
          }}
        ></input>
        <button
          style={{
            height: "100%",
            width: "18.7%",
            backgroundColor: "#E6B9DE",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={sendMessage}
        >
          send
        </button>
      </div>
    </div>
  );
}
