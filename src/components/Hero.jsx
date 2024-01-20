import React, { useEffect, useState } from 'react'
import endpoints from '../Services/MovieServices'
import { createImageUrl } from '../Services/MovieServices';
import axios from 'axios';
const Hero = () => {
    const[movie,setMovie]=useState({});
    useEffect(()=>{
      axios.get(endpoints.popular)
      .then((res)=>{
        const movies=res.data.results;
        const randommovies=movies[Math.floor(Math.random()*movies.length)];
        console.log(randommovies)
        setMovie(randommovies)
      })
      .catch((error)=>{
        console.log(error.message)
      })
    },[])
  return (
    <div className=' w-full  lg:h-screen'>
        <div className=' w-full h-full'>
            <div className=' absolute w-full  h-screen bg-gradient-to-r from-black'/>
            <img
              className='w-full h-screen  object-cover object-top'
 
             src={createImageUrl(movie.backdrop_path??movie.poster_path,"original")}
            />
            <div className='px-4 sm:px-8 absolute bottom-[5%] lg:bottom-[10%]'>
                <p className=' font-nsans-bold text-3xl md:text-6xl max-w-[80%]'>{movie.title}</p>
                <div className=' mt-8 mb-4'>
                    <button className=' bg-gray-100 text-black font-nsans-medium border border-gray-200 px-2 py-1 mr-2'>Play</button>
                    <button className=' border border-gray-400 px-2 py-1'>Watch Later</button>
                </div>
                <p className='text-sm text-gray-300'>{movie.release_date}</p>
                <p className='mt-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{movie.overview}</p>
            </div>
        </div>

    </div>
  )
}

export default Hero