import { useState } from "react"

function App() {
  const [color,setColor]= useState("white")
  return (
    <>
       
    <div  className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0
      px-2 gap-4">
        <div className="fixed  flex flex-wrap justify-center gap-7
         shadow-lg bg-white py-3 px-2  rounded-3xl">
          
          <button
          onClick={()=>setColor("red")}
             className="outline-none px-4 py-1 rounded-full bg-amber-100 shadow-amber-200
             text-white shadow-lg"
             style={{backgroundColor:"red"}}>red</button>
             
          <button
          onClick={()=>setColor("grey")}
             className="outline-none px-4 py-1 rounded-full bg-amber-100 shadow-amber-200
             text-white shadow-lg"
             style={{backgroundColor:"grey"}}>grey</button>
             
          <button
          onClick={()=>setColor("orange")}
             className="outline-none px-4 py-1 rounded-full  shadow-amber-200
             text-white shadow-lg"
             style={{backgroundColor:"orange"}}>orange</button>
             
          <button
          onClick={()=>setColor("olive")}
             className="outline-none px-4 py-1 rounded-full bg-amber-100 shadow-amber-200
             text-white shadow-lg"
             style={{backgroundColor:"olive"}}>olive</button>
             
          <button
          onClick={()=>setColor("maroon")}
             className="outline-none px-4 py-1 rounded-full bg-amber-100 shadow-amber-200
             text-white shadow-lg"
             style={{backgroundColor:"maroon"}}>maroon</button>
             
          <button
          onClick={()=>setColor("blue")}
             className="outline-none px-4 py-1 rounded-full bg-amber-100 shadow-amber-200
             text-white shadow-lg"
             style={{backgroundColor:"blue"}}>blue</button>
             
          <button
          onClick={()=>setColor("green")}
             className="outline-none px-4 py-1 rounded-full bg-amber-100 shadow-amber-200
             text-white shadow-lg "
             style={{backgroundColor:  "green"}}>green</button>
            </div> 
      </div>
    </div>
    </>
  )
}

export default App
