import React, { useState } from 'react'
import { createImageUrl } from '../Services/MovieServices'
import {FaHeart,FaRegHeart} from "react-icons/fa"
import {doc,updateDoc,arrayUnion} from "firebase/firestore"
import { UserAuth } from '../Context/AuthContext'
import { db } from '../Services/FireBase'

const MovieCard = ({movie}) => {
       const{user}=UserAuth();
       const[like,setLike]=useState(false);
    async function  markFavShows(){
         const userEmail=user?.email;
         if(userEmail){
          const userDoc=doc(db,"users",userEmail)
          setLike(!like)
          await updateDoc(userDoc,{
            favShows:arrayUnion({...movie})
          })
         }
         else{
          alert ("Login to save a movie");
         }
        }
       
  return (
    <div className='relative w-[200px] md:w-[240px] lg:w-[280px] inline-block mx-4 my-2 rounded-lg overflow-hidden  '>
        <img 
           className=' w-full h-40 object-cover object-top'
          src={createImageUrl(movie.backdrop_path??movie.poster_path,"original")}
        />
        <div className='absolute opacity-0 hover:opacity-100 hover:bg-black/80 w-full h-full top-0 left-0 flex justify-center items-center'>
          <h1 className='    max-w-[70%] whitespace-normal font-nsans-bold'>{movie.title}</h1>

        </div>
        <p onClick={markFavShows} className=' cursor-pointer'>{like?<FaHeart 
           className='absolute top-2 left-2 text-gray-100'
        />:<FaRegHeart
            className='absolute top-2 left-2 text-gray-100'
        />}</p>
    </div>
  )
}

export default MovieCard