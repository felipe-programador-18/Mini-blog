import React, {useContext, createContext} from 'react'

export const AuthContext = createContext()

// this way interest and different about create context!!
export const AuthProvider = ({children, value}) => {

 return <AuthContext.Provider value={value} >
       {children}
 </AuthContext.Provider>
}

export const useAuthValue = () =>{
    return useContext(AuthContext)
}