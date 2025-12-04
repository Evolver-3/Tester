import React, { useState } from 'react'

const Poke = () => {

  const [pokemon,setPokemon]=useState(null);
  const[user,setUser]=useState('');

  const handleClick=async()=>{
    try{
    const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${user}`)
    const data=await res.json();
    setPokemon(data)
    }catch(error){
    console.log(error)
    }
  }
 

  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
      <p>Enter the name of pokemon:</p>
      <input className=' rounded-lg px-2 py-1 bg-gray-300 text-sm font-bold' type="text" value={user} onChange={(e)=>{
      setUser(e.target.value)
      }}></input>

      <button className='bg-orange-400 text-white rounded-lg mx-2 px-3 hover:bg-orange-500' onClick={handleClick}>Search</button>
      </div>

      {pokemon && (
        <div className='containter bg-gray-400 w-100 h-50 flex flex-col items-center'>
        <p>Name:{pokemon.name}</p>
        <p>Height:{pokemon.height}</p>
        <p>Weight:{pokemon.weight}</p>
        <img src={pokemon.sprites.front_default} alt="pokemon-img"></img>

      </div>

      )}
      
    </div>
  )
  }

export default Poke