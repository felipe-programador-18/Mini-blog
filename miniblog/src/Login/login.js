import  styles from './login.module.css'

import React,{useState, useEffect} from 'react'
import { useAutentication } from '../hoock/useAuthentication'

import { singInWithGooglePopup } from '../Callfirebase/firebase'


const Login = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [error, setError] = useState("")
 
 
 const LoginGoogle = async () => {
   const response = await singInWithGooglePopup()
   console.log('Entrando com google account',response);
 }



 // this properties is destructment about my persolaties hoock!
 const {login,error:authError, loading} = useAutentication()
 
 // this care about send date!
 const handlingSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
        email,
        password,
    }
   
    const res = await login(user)
    
    console.log(user)

 }
 //need verify about my setError change!!  
  useEffect(() => {
     if(authError){
        setError(authError)
     }
  },[authError])

    
    
    return ( <div className={styles.login} >
        <h1>Entrar</h1>
        <p>Faça o login para poder entrar no sistema.</p>


       <form onSubmit={handlingSubmit}>
  
        <label>
         <span>Email:</span>
         <input type='email' 
         name='email' 
         required 
         placeholder='E-mail do Usuário'  
         value={email}     
         onChange={(e)=>   setEmail(e.target.value)}  />
        </label>

        <label>
         <span>Senha:</span>
           <input type='password'
           name='password' 
           required 
           placeholder='Insira sua Senha'  
           value={password} 
           onChange={(e) => setPassword(e.target.value)} />
        </label>
             
            {!loading && <button onClick={LoginGoogle}  className='btn' >Entrar com google ?</button> }  
    
           {!loading && <button className='btn' >Entrar</button> }
           
           {loading && (<button className='btn' disabled >
            Aguarde .... 
           </button>) }

          {error && <p className='error' > {error} </p>}


</form>

    </div>)
}

export default Login