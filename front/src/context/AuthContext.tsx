"use client"
import { IAuthContextProps } from "../../interfaces/IAuthContextProps";
import { IUserSession } from "../../interfaces/IUserSession";
import React, {createContext, useContext, useState, useEffect} from "react";

interface  AuthProviderProps{
    children: React.ReactElement
}

const AuthContext = createContext<IAuthContextProps>({
    userData: null,
    setUserData: () => {}
})

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [userData, setUserData] = useState<IUserSession | null>(null);

    useEffect(() => {
        if(userData){
            localStorage.setItem('IUserSession', JSON.stringify(userData));
        }
    },[userData]);

    useEffect(() => {
        if(typeof window !== 'undefined' && window.localStorage){
            const userData = localStorage.getItem('IUserSession')   
            setUserData(JSON.parse(userData!))
        }
    },[]);

  return (
   <AuthContext.Provider value={{userData, setUserData}}>
     {children}
   </AuthContext.Provider>
       
    )
}

export const useAuth = () => useContext(AuthContext)


