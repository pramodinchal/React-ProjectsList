import { useState } from "react";


function App() {
   const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      
      <div className=" flex flex-wrap  gap-2 justify-evenly">
      <button className="white p-2 bg-white border-3 m-3 rounded-2xl" onClick={()=>setColor('white')}>White</button>
       <button className="white p-2 bg-red-700 border-3 m-3 text-white rounded-2xl" onClick={()=>setColor('red')}>Red</button>
       <button className="blue p-2 bg-blue-700 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('blue')}>Blue</button>
       <button className="yellow p-2 bg-yellow-400 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('yellow')}>Yellow</button>
       <button className="pink p-2 bg-pink-600 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('pink')}>Pink</button>
       <button className="brown p-2 bg-amber-950 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('brown')}>Brown</button>
       <button className="green p-2 bg-green-800 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('green')}>Green</button>
       <button className="violet p-2 bg-violet-700 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('violet')}>Violet</button>
       <button className="orange p-2 bg-orange-700 border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('orange')}>Orange</button>
       <button className="black p-2 bg-black border-3 m-3  text-white rounded-2xl" onClick={()=>setColor('black')}>Black</button>
      </div>
      
    </div>
  )
}

export default App
