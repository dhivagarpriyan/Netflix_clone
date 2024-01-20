import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import { auth,db } from "../Services/FireBase";
import { useEffect } from "react";
import {doc,setDoc} from "firebase/firestore"

const AuthContext=createContext()

export function AuthContextProvider({children}){

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const[user,setUser]=useState({});

    function signUp(email,password){
         createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db,"users",email),{
            favShows:[],
        })

    }

    function signIn(email,password){
        return signInWithEmailAndPassword(auth,email,password)

    }

    function logOut(){
        return signOut(auth)
    }


    return <AuthContext.Provider  value={{user,signUp,signIn,logOut}}>
        {children}
    </AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext)
}