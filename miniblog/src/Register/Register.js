import React,{useState, useEffect} from 'react'

import './register.module.css'
const Register = () => {
 const [displayName, setdisplayName ] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")
 const [error, setError] = useState("")
 
 // this care about send date!
 const handlingSubmit = (e) => {
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
   console.log(user)
 }


  return ( <div>
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
          <button className='btn' >Cadastrar</button>

          {error && <p className='error' > error here {error} </p>}

       </form>

    </div>)
}

export default Register