import { createContext, useContext, useEffect, useState } from "react";
import { init } from "../lib/auth.js";
export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
     const [user, setUser] =  useState()
     useEffect(()=> {
          init((user) =>{
               setUser(user)
          })     
     }, [])

     const contextValue = {
          user
     }

     return (
          <AuthContext.Provider value={contextValue}>
               { children }
          </AuthContext.Provider>
     )
}

export function useAuth(){
     return useContext(AuthContext)
}