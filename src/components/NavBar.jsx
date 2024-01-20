import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'


const NavBar = () => {
     const {user,logOut}=UserAuth();
  return (
    <div className='absolute w-full p-4 flex items-center justify-between z-50'>
        <Link to='/'>
             <h1 className=' font-nsans-bold text-red-600 text-3xl  md:text-5xl'>NETFLIX</h1>
        </Link>
        {
           user?.email?(
               <div className=''>
               <Link to="/profile" >
                   <button className=' text-white font-nsans-medium cursor-default'>Profile</button> 
               </Link>
               
                    <button onClick={logOut} className=' text-white font-nsans-medium bg-red-600 p-1 rounded-md mx-2 cursor-pointer'>
                        LogOut
                    </button>
               
            </div>
           ):(
               <div className=''>
               <Link to="/signin" >
                   <button className=' text-white font-nsans-medium cursor-default'>SignIn</button> 
               </Link>
               <Link to="/signup" >
                    <button className=' text-white font-nsans-medium bg-red-600 p-1 rounded-md mx-2 cursor-pointer'>SignUp</button>
               </Link>
            </div>
           )
        }
      
    </div>
  )
}

export default NavBar