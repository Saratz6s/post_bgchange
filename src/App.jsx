import { useState } from 'react'

import './App.css'



function App() {
  const [color, setColor] = useState("Black")
  const bgColor=(clr)=>{
    setColor(clr)
console.log(color);
    
  }

  return (
    
    <div style={{margin:'0',backgroundColor:color,height:'100vh',width:'100%'}} className='d-flex  justify-content-center align-items-center'>
             <div className='d-flex flex-column '>
             <h1 className='my-5 text-center bolder text-white'>Background Color Changer</h1>

        <h1 className='my-5 text-center bolder text-white mt-1'>Select a Color</h1>
        
     
   <div className='d-flex justify-content-center align-items-center'>
         <button onClick={()=>bgColor("red")}  className='btn btn-danger text-light mx-5'>Red</button>
         <button onClick={()=>bgColor("green")} className='btn btn-success text-light mx-5'>Green</button>
         <button onClick={()=>bgColor("blue")} className='btn btn-primary text-light mx-5'>Blue</button>
         <button onClick={()=>bgColor("yellow")}className='btn btn-warning text-light mx-5'>Yellow</button>
   </div>

    </div>
     
    </div>
  )
}

export default App
