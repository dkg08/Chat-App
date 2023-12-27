import React from 'react'

export default function Chat({socket, user, roomId}) {
  return (
    <div className='chatWindow'>
      <div className="topSection">Chat App -{user}</div>
      <div className="messageSection"></div>
      <div className="bottomSection">
        <input type="text" placeholder='message' style={{height:"100%",width:"81.3%", padding: "6px", border:"none",outline:"none", fontSize:"16px", color: "grey"}}></input>
        <button style={{height:"100%", width: "18.7%", backgroundColor:"#E6B9DE", color: "white",border:"none", cursor:"pointer"}}>send</button>
      </div>
    </div>
  )
}
