

export default function HomePage() {
  return (
    <div style={{color:"white", padding: 20, display: "flex", flexDirection:"column",gap: 10, alignItems:"center"}}>
        <input type="text" placeholder="Enter Name..." style={{padding: 8, height: "50px", width: "240px", fontSize:"20px", borderRadius:10, border:"none"}}/>
        <input type="text" placeholder="Room Id" style={{padding: 8, height: "50px", width: "240px", fontSize:"20px", borderRadius:10, border:"none"}}/>
        <button style={{padding: 8, height: "50px", width: "120px", fontSize:"18px", borderRadius:10, border: "2px solid green", cursor:"pointer", }}>Join Room</button>
    </div>
  )
}
