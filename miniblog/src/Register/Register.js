import React,{useState, useEffect} from 'react'
import { useAutentication } from '../hoock/useAuthentication'
import  styles from './register.module.css'

const Register =  () => {
 const [displayName, setdisplayName ] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")
 const [error, setError] = useState("")
  
 // this properties is destructment about my persolaties hoock!
 const {createUser,error:authError, loading} = useAutentication()
 
 // this care about send date!
 const handlingSubmit = async (e) => {
    e.preventDefault()
    setError("")

    const user = {
        displayName,
        email,
        password,
    }
    if(password !== confirmPassword){
        setError("A senha precisam ser iguais!!")
     return
    }
    
    const res = await  createUser(user)
    
    console.log(user)

 }
 //need verify about my setError change!!  
  useEffect(() => {
     if(authError){
        setError(authError)
     }
  },[authError])


  return ( <div className={styles.register} >
       <h1>Cadastre-se para postar dicas!</h1>

       <p>Crie seu usuário e compartilhe suas experiências !</p>
       <form onSubmit={handlingSubmit}>
          <label>
            <span>Nome:</span>
            <input type='text' 
             name='displayName' 
             required 
             placeholder='Nome do Usuário' 
             value={displayName}  
             onChange={(e)=>  setdisplayName(e.target.value)} />
          </label>
         
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

          <label>
            <span>Confirmação de Senha:</span>
            <input type='password' 
             name='ConfirmPassword'
             required
             placeholder='Confirme sua senha'
             value={confirmPassword} 
             onChange={(e) => setConfirmPassword(e.target.value) }    />
          </label>
          
           {!loading && <button className='btn' >Cadastrar</button> }
           
           {loading && (<button className='btn' disabled >
            Aguarde .... 
           </button>) }

          {error && <p className='error' > {error} </p>}

       </form>

    </div>)
}

export default Register