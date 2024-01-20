import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
const MovieRow = ({title,url}) => {
    const rowId=Math.floor(Math.random() * 1000);
   console.log(rowId)
    const[movie,setMovie]=useState([]);
    useEffect(()=>{
       axios.get(url).then((response)=>
        setMovie(response.data.results)
        
    )
       
    },[url])

    const Slide=(offset)=>{
      const slider=document.getElementById('slider' + rowId );
       slider.scrollLeft=slider.scrollLeft + offset;
    };
    
  return (
    <div >
        <p className=' font-nsans-bold capitalize text-xl p-4'>{title}</p>
        <div className=' relative flex items-center group'>
          <MdChevronLeft 
             onClick={()=>Slide(-500)  }
             size={30}
             className='z-10 bg-white rounded-full absolute left-2 text-gray-700 cursor-pointer group-hover:block hidden'
          />
            <div className=' w-full h-full scroll-smooth whitespace-nowrap overflow-x-scroll scrollbar-hide '
              id={"slider" + rowId}
            >
                {movie.map((movies)=>
                   
                       <MovieCard movie={movies} key={movies.id}/>
                   
                )}
            </div>
            <MdChevronRight
                 onClick={()=>Slide(500)}
                size={30}
                className=' z-10  bg-white rounded-full absolute right-2  text-gray-700 cursor-pointer group-hover:block hidden'
            />
        </div>
    </div>
  )
}

export default MovieRow