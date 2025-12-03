import { useState,useEffect } from "react"
const Gul = () => {

  const[rate,setRate]=useState(0);
  const [amount,setAmount]=useState(1);

  useEffect(()=>{
    fetch("https://api.exchangerate-api.com/v4/latest/USD").then(res=>res.json()).then(data=>{setRate(data.rates.INR)})

  },[])
  return (
    <div className='bg-gray-500 w-screen h-screen'>
      <div>
        {rate? (
          <div>
          <h1>Currency convertor INR to USD</h1>
          <input className="border border-black" type='number' value={amount}
          onChange={(e)=>
            setAmount(e.target.value)

          }></input>

          <p>{(amount*rate).toFixed(2)}  INR</p>
          </div>
        ):(
          <p>Response Processing</p>

        )}
        
      </div>
    </div>
  )
}

export default Gul