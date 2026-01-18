import { useState } from 'react'

function App() {
  let [color, setcolor] = useState("olive");

  

  return (
    <>
      <div className={` w-full h-screen duration-200 `}
      style={{backgroundColor:color}} >
        <div>
          <div className='fixed flex bottom-3 left-60 gap-2 justify-center bg-white p-4 rounded-2xl border-solid' >
             <button onClick={()=>{setcolor("red")} } className='bg-red-400 border border-black'>Red</button>
            <button onClick={()=>{setcolor("green")} } className='bg-green-400 border border-black'>Green</button>
            <button onClick={()=>{setcolor("blue")} } className='bg-blue-400 border border-black'>Blue</button>
            <button onClick={()=>{setcolor("olive")} } className=' border border-black'style={{backgroundColor : "olive"}}>Olive</button>
            <button onClick={()=>{setcolor("gray")} } className='bg-gray-400 border border-black'>Gray</button>
            <button onClick={()=>{setcolor("yellow")} } className='bg-yellow-400 border border-black'>Yellow</button>
            <button onClick={()=>{setcolor("pink")} } className='bg-pink-400 border border-black'>Pink</button>
            <button onClick={()=>{setcolor("purple")} } className='bg-purple-400 border border-black'>Purple</button>
            <button onClick={()=>{setcolor("#E6E6FA")} } className=' border border-black'style={{backgroundColor : "#E6E6FA"}}>Lavender</button>
            <button onClick={()=>{setcolor("white")} } className='bg-white border border-black'>White</button>
            <button onClick={()=>{setcolor("black")} } className='bg-black border border-black text-white'>Black</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
