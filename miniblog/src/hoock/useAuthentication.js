import {db} from '../Callfirebase/firebase'
import  {useState, useEffect} from 'react'
import {getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    signInWithEmailAndPassword
 } from 'firebase/auth'

 export const useAutentication = () => {
    const[error, setError]= useState(null)
    const [loading, setLoading] = useState(null) 
    //cleanup work about that!!
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth()
    
    // this function to avoid memory miss!
    function checkIfisCancelled(){
      if(cancelled){
        return;
     }
    }

    
   // this is register 
   const createUser = async (data) => {
     checkIfisCancelled()

     setLoading(true)
     setError("")
      try {
        const {user} = await createUserWithEmailAndPassword(
            auth, 
            data.email, 
            data.password)

            await updateProfile(user, {
                displayName: data.displayName
            } )
         
         setLoading(false)
         return user
      } catch (error) {
         
         console.log(error.message)
         console.log( typeof error.message)
         let systemErrorUser ;
         if(error.message.includes("Password")){
          systemErrorUser ="A senha precisa conter pelo menos 6 caracteres"
         } else if (error.message.includes("email-already")){
          systemErrorUser = "Email já cadastrado!!"    
         } else {
            systemErrorUser ="Ocorreu um erro, tente mais tarde."
         }
         setLoading(false)
         setError(systemErrorUser)
      
      }
  
   }
   // logout --sing out
   const logout = () => {
      
      checkIfisCancelled()
      signOut(auth)
      console.log("SAIU DO SISTEMA")
   }
   
  //login sign in 
   const login = async (data) =>  {
      checkIfisCancelled()
      setLoading(true)
      setError(false)
      console.log("ENTROU NO SISTEMA!")
      try {
       await signInWithEmailAndPassword(auth,data.email, data.password)
       setLoading(false) 
      } catch (error) {
         let systemErrorUser ;
         
         if(error.message.includes("user-not-found")){
            systemErrorUser = "Usuário não encontrado!"
         } else if (error.message.includes("wrong-password")){
           systemErrorUser = "Senha Incorreta!"
         } else{
           systemErrorUser = "Ocorreu um erro, tente mais tarde !" 
         }
         setError(systemErrorUser)
         setLoading(false)
      }

   }

   
   // this verify function !!
   useEffect(() => {
    return () => checkIfisCancelled(true)
   },[])

  return {auth, createUser, error, loading, logout , login }
  

}