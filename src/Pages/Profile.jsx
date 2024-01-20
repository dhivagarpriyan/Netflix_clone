import React from 'react'
import { useState,useEffect } from 'react'
import { MdChevronRight,MdChevronLeft } from 'react-icons/md'
import {AiOutlineClose} from "react-icons/ai"
import { UserAuth } from '../Context/AuthContext'
import { db } from '../Services/FireBase'
import { createImageUrl } from '../Services/MovieServices'
import { onSnapshot,arrayRemove,doc,updateDoc } from 'firebase/firestore'

const Profile = () => {
  const[movie,setMovie]=useState([])
  const {user}=UserAuth()
  useEffect(()=>{
    if(user){
      onSnapshot(doc(db,"users",`${user.email}`),(doc)=>{
        if(doc.data()) setMovie(doc.data().favShows)
      })
    }
  },[user?.email])
  
console.log(movie)
  const handleUnlikeShow = async (movies)=>{
     
      
       const userDoc=doc(db,"users",user.email)

      await updateDoc(userDoc,{
        favShows :arrayRemove(movies),
      })
  }
 
  return (
    <div>
      <div>
          <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='///'
          className=' w-full h-[420px] object-cover '

          />
          <div className=' fixed bg-black/60 top-0 left-0 w-full h-[500px]'/>
          <div className=' absolute top-[20%] md:top-[30%] px-8'>
            <h1 className=' text-3xl font-nsans-bold'>MY FAVOURITE SHOWS</h1>
            <p className=' text-gray-400 mt-2'>
              {user.email}
            </p>

          </div>
      </div>
      <div >
        
        <div className=' relative flex items-center group'>
          <MdChevronLeft 
             onClick={()=>Slide(-500)  }
             size={30}
             className='z-10 bg-white rounded-full absolute left-2 text-gray-700 cursor-pointer group-hover:block hidden'
          />
            <div className=' w-full h-full scroll-smooth whitespace-nowrap overflow-x-scroll scrollbar-hide '
              id={"slider"}
            >
                {movie.map((movies)=>(
                   
                   <div key={movies.id} className='relative w-[200px] md:w-[240px] lg:w-[280px] inline-block mx-4 my-2 rounded-lg overflow-hidden  '>
                   <img 
                      className=' w-full h-40 object-cover object-top'
                     src={createImageUrl(movies.backdrop_path??movies.poster_path,"original")}
                   />
                   <div className='absolute opacity-0 hover:opacity-100 hover:bg-black/80 w-full h-full top-0 left-0 flex justify-center items-center'>
                     <h1 className='    max-w-[70%] whitespace-normal font-nsans-bold'>{movies.title}</h1>
                     <p>
                      <AiOutlineClose size={20}
                        onClick={()=>handleUnlikeShow(movies)}
                       className='absolute top-2 right-2'
                      />
                     </p>
           
                   </div>
                   
               </div>)
                   
                )}
            </div>
            <MdChevronRight
                 onClick={()=>Slide(500)}
                size={30}
                className=' z-10  bg-white rounded-full absolute right-2  text-gray-700 cursor-pointer group-hover:block hidden'
            />
        </div>
    </div>
    </div>
  )
}

export default Profile