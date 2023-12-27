import { useState } from "react"
import Chat from "./Chat"
import {io}  from "socket.io-client"

// const socket = io.connect('ws://localhost:3000')
const socket = "socket"


export default function HomePage() {
  const [showChat, setShowChat] = useState(true)
  const [user, setUser] = useState(null)
  const [roomId, setRoomId] = useState(null)

  function joinRoom() {
    if(!user || !roomId){
      window.alert("please provide proper user and id")
      return
    }
    setShowChat(!showChat)

  }

  return (
    
      (!showChat) ? <div style={{color:"white", padding: 20, display: "flex", flexDirection:"column",gap: 10, alignItems:"center"}}>
        <input type="text" placeholder="Enter Name..." style={{padding: 8, height: "50px", width: "240px", fontSize:"20px", borderRadius:10, border:"none"}} onInput={e => setUser(e.target.value)}/>
        <input type="text" placeholder="Room Id" style={{padding: 8, height: "50px", width: "240px", fontSize:"20px", borderRadius:10, border:"none"}} onInput={e => setRoomId(e.target.value)}/>
        <button style={{padding: 8, height: "50px", width: "120px", fontSize:"18px", borderRadius:10, border: "2px solid green", cursor:"pointer", }} onClick={joinRoom}>Join Room</button>
    </div>: <Chat socket={socket} user={user} roomId={roomId}/>
    
  )
}
