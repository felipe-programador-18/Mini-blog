import React,{useState} from 'react'
import styles from  "./create.module.css"
import { useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../context/Authcontext'


const CreatePost = () => {
   const[title, setTitle] = useState("")
   const[image, setImage] = useState("")
   const[body, setBody] = useState("")
   const[tags, setTags] = useState([]) 
   const[formError, setFormError] = useState("")

   //const {createUser,error:authError, loading} = useAutentication()
   const handlingSubmit = (e) => {
    e.preventDefault()
   }

   return( <div className={styles.create_post} >
       <h2>Criar post</h2>
       <p>Escreva o que quiser e compartilhe o seu conhecimento.</p>
        
        <form onSubmit={handlingSubmit}>
          <label >
            <span>Título:</span>
            <input type='text' 
            name='Title' 
            required 
            placeholder='Pense num bom título...' 
            value={title}
            onChange={(e)=> setTitle(e.target.value)}  />
          </label>
          
          <label >
            <span>Url da imagem:</span>
            <input type='text' 
            name='Imagem' 
            required 
            placeholder='Adicionar Imagem que representa seu post.' 
            value={image}
            onChange={(e)=>  setImage(e.target.value)}  />
          </label>
           
          <label>
           <span>Conteúdo:</span>  
           <textarea name="body" 
            required
            value={body}
            placeholder="Insira o conteúdo do post." 
            onChange={(e) => setBody(e.target.value) }  ></textarea>
          </label> 
        
          <label >
            <span>Tags:</span>
            <input type='text' 
            name='Imagem' 
            required 
            placeholder='Insira as tags separadas por vírgulas.' 
            value={tags}
            onChange={(e)=>  setTags(e.target.value)}  />
          </label> 
          
         {/* {!loading && <button className='btn' >Cadastrar</button> }
           
           {loading && (<button className='btn' disabled >
            Aguarde .... 
           </button>) }

         {error && <p className='error' > {error} </p>} */ }

           
        
        </form>
     
   </div> )
}

export default CreatePost