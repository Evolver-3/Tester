import { useState } from "react"

const Calculator = () => {

  const [input,setInput]=useState("")

  const handleClick=(value)=>{
    setInput(input + value);
  }

  const singleClear=()=>{
    setInput(input.slice(0,-1))
  }
 
  const fullClear=()=>{
    setInput("")
  }

  const calculate=()=>{
    try{
      setInput(eval(input).toString())
    }catch{
      setInput("Error")
    }
  }

  return (
    <div className='w-screen h-screen bg-gray-400 flex items-center justify-center'>
      <div className='flex flex-col justify-center w-max border bg-green-300 py-5 px-4'>
        <input className=" bg-white rounded-lg w-full h-10 px-2" type="text" value={input} readOnly>
        </input>
        <div className='grid grid-cols-4'>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("%")}>%</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700'>CE</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={fullClear}>C</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={singleClear}>X</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("+")}>+</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("-")}>-</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("1")}>1</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("2")}>2</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("3")}>3</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("4")}>4</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("5")}>5</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("6")}>6</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("7")}>7</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("8")}>8</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("9")}>9</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("0")}>0</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("/")}>/</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={calculate} >=</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick(".")}>.</button>
          <button className='border border-gray-600 rounded-lg bg-purple-500 hover:bg-purple-700' onClick={()=>handleClick("*")}>*</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator 