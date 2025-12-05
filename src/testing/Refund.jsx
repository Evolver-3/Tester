import {useState} from 'react'
const Refund = () => {

  const [open,setOpen]=useState(false);
  return (
    <div >
      <button className="bg-gray-500 text-white rounded-lg px-2 py-1 hover:bg-gray-400 absolute" onClick={()=>setOpen(!open)}>Refund Payment</button>

      {open &&(
        <div className='bg-gray-700 w-100  z-30 relative   rounded-lg px-5 py-7'>
          <div>
          <h2 className='text-[22px] font-bold text-white mb-3'>Refund payment</h2>
          <p className='text-md text-gray-200 '>The refund will be reflected in the customer's bank account 2 to 3 business days after processing.</p>
          </div>

          <form onSubmit={""} className='flex flex-col mt-6 gap-3'>
            <p className='text-lg font-bold text-white'>Amount</p>
            <input type="number" placeholder="$0.00" className='bg-gray-600 rounded-md px-2 py-1 text-white'></input>
            <button className='w-full  text-center bg-gray-400 rounded-lg text-white font-bold text-[20px] hover:bg-gray-300'>Refund</button>
            <button className='w-full  text-center rounded-lg text-white font-bold text-[20px] hover:bg-gray-400'>Cancel</button>
          </form>
        </div>

      )}
    </div>
  )
}

export default Refund