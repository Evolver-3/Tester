import {useState} from 'react'



const MovieCard = () => {

  const[movies,setMovies]=useState([])
  const [user,setUser]=useState('');

  const handleClick=async()=>{

    const res=await fetch(`http://www.omdbapi.com/?&apikey=11d2df0c&s=${user}`)
    const data=await res.json()
    setMovies(data.Search);
    console.log(data);

  }
  return (
    <div className='w-screen h-screen bg-gray-400'>
      <p className='text-[30px] font-bold bg-linear-to-r/longer from-indigo-500 to-teal-400 text-'>
        Search Movie
      </p>
      <input className='bg-white px-2 py-2' type="text" value={user} onChange={(e)=>setUser(e.target.value)}></input>
      <button kclassName='bg-orange-400 rounded py-1 px-3 ' onClick={handleClick}>Search</button>

     
         
        {movies.map((movie, index) => (
          <div key={index} className="bg-gray-200 p-2 rounded shadow grid grid-cols-4">
            <img
              src={movie.Poster}
              alt="movie"
              className=' flex flex-row rounded'
            />
            <h2 className='font-bold mt-2'>{movie.Title}</h2>
          </div>
        ))}
      
     


    </div>
  )
}

export default MovieCard