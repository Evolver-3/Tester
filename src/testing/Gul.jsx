import {useState,useEffect} from 'react'

const Gul = () => {

  const [rate,setRate]=useState(0);
  const [amount,setAmount]=useState(1);

  useEffect(()=>{
    fetch("https://api.exchangerate-api.com/v4/latest/USD").then(res=>res.json()).then(data=>
      {setRate(data.rates.INR)})
     

  },[])

  return (
    <div>
      USD to INR
      <div>
        {rate?(
          <div>
          <input type='Number' value={amount} placeholder='enter USD' onChange={(e)=>setAmount(e.target.value)}></input>

          <p>{(amount*rate).toFixed(2)} INR</p>
          </div>
        ):(
          <p>Response Loading</p>
        )}
      </div>      
    </div>
  )
}

export default Gul