import { useState,useEffect } from "react"

const Currency = () => {

  const[rate,setRate]=useState(0);
  
  const[amount,setAmount]=useState(1)

  useEffect(()=>{
    fetch("https://api.exchangerate-api.com/v4/latest/USD").then(res=>res.json()).then(data=>{
      setRate(data.rates.INR)
    })
  },[])

  return (
    <div>
      <h1>Currency Convertor </h1>

      {rate ? (
        <div>
      <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}></input>

      <h2>
        {amount} USD ={(amount*rate).toFixed(2)}INR
      </h2>
      </div>
    ):(
      <p>Loading rate...</p>
    )}
    </div>
  )
}

export default Currency