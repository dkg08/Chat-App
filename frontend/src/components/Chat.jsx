import React, { useEffect, useState } from "react";

import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat({ socket, user, roomId }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  async function sendMessage() {
    if (currentMessage == "") {
      return;
    }
    const message = {
      user,
      message: currentMessage,
      roomId,
      time: new Date().toLocaleTimeString(),
    };
    setMessageList((prev) => setMessageList([...prev, message]));
    await socket.emit("chat message", JSON.stringify(message));
    setCurrentMessage("");
  }

  useEffect(() => {
    socket.on("receive-msg", (msg) => {
      console.log(msg, "received message");
      setMessageList((prev) => [...prev, JSON.parse(msg)]);
    });
  }, [socket]);

  return (
    <div className="chatWindow">
      <div className="topSection">
        {user}({roomId})
      </div>
      <div className="messageSection">
        <ScrollToBottom>
          {messageList &&
            messageList.map(({ user: unknownUser, message, time }, idx) => (
              <div
                className="message"
                key={idx}
                id={user === unknownUser ? "you" : "other"}
              >
                {message && (
                  <div
                    style={{
                      marginTop: 8,
                      textAlign: user !== unknownUser ? "right" : "left",
                    }}
                  >
                    <div className="message-meta">
                      <p id="author">{unknownUser}</p>
                    </div>
                    <div className="message-content">
                      <p>{message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{time}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </ScrollToBottom>
      </div>
      <div className="bottomSection">
        <input
          type="text"
          placeholder="message"
          value={currentMessage}
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
            setCurrentMessage(e.target.value);
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
