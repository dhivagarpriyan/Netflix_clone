import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext';

const SignUp = () => {
  const[rememberLogin,setRememberLogin]=useState(true);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const {user,signUp}=UserAuth();
  const navigate=useNavigate()

  const handleSubmitForm=async(e)=>{
    e.preventDefault();
    console.log(email)
    console.log(password)
    try{
      await signUp(email,password)
      navigate("/")
    }
    catch(err){
      console.log(err.message)
    }

  }
  return (
    <>
         <div className=' w-full  h-screen'>
             <img 
               className=' w-full h-full object-cover absolute'
              src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
             />
             <div className='fixed bg-black/70 w-full h-screen top-0 left-0'/>
             <div className=' fixed z-20 py-24 px-4 w-full'>
                <div className=' max-w-[450px] h-[380px] lg:h-[450px] mx-auto rounded-lg bg-black/80'>
                  <div className=' max-w-[320px] mx-auto lg:pt-24 py-16'> 
                  <h1 className=' text-center font-nsans-bold text-xl'>SignUp</h1>
                  <form className=' mx-4' onSubmit={handleSubmitForm}>
                    <input 
                      type='email'
                      placeholder='Email....'
                      autoComplete='email'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className=' w-full p-1 rounded focus:outline-none bg-gray-700 mt-4 '
                    />
                    <input 
                      type='password'
                      placeholder='Password....' 
                      autoComplete='current-password'
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      className=' w-full p-1 rounded focus:outline-none bg-gray-700 mt-4'
                    />
                    <button className=' mt-4 bg-red-600 text-white font-nsans-bold p-1 w-full'>
                       Sign Up
                    </button>
                    <div className=' flex justify-between items-center text-gray-600 mt-4'>
                      <p>
                        <input 
                        type='checkbox' 
                        className='mr-2'
                        checked={rememberLogin} onChange={()=>setRememberLogin(!rememberLogin)}
                        />
                        Remember Me
                      </p>
                      <p>Need Help</p>
                    </div> 
                    <p className='my-4'>
                      <span className='text-gray-600 mr-2 text-sm sm:text-md'>Already subcribed to Netflix?</span>
                  
                      <Link to="/signin">Sign In</Link>
                    </p>
                  </form>
                  </div>
                     
                </div>
             </div>
            

             </div>
    </>
  )
}

export default SignUp