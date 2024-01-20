import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import NavBar from './components/NavBar'
import { AuthContextProvider } from './Context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'



function App() {


  return (
    <>
      <AuthContextProvider>
      <NavBar/>
      <Routes>
          
           <Route path='/' element={<Home/>} />
           <Route path='/signin' element={<SignIn/>} />
           <Route path='/signup' element={<SignUp/>} />
           <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
       </Routes>    
      </AuthContextProvider>
   </>
  )
}

export default App
