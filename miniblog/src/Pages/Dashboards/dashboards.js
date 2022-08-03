import React from 'react'
import styles from "./dashboard.module.css"
import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/Authcontext'
import { useFecthingDocuments } from '../../hoock/useFecthingdocuments'
import { useDeletecDoc } from '../../hoock/useDeleteDocument'


const Dashboard = () => {
   //deleted users posts
    const {DeletedDocument} = useDeletecDoc("posts")  

    // get post of users!!!
    const{user} = useAuthValue()
    const uid = user.uid 

    const {documents:posts, loading} =useFecthingDocuments('posts', null, uid)


    if(loading){
       <p>Carregando Posts .....</p>
    }
    
    
    



    return(<div className={styles.dashcontainer} >

      
     <h2>Dashboards!!</h2>
     <p>Gerencie os seus posts!</p>
       
       {posts && posts.length === 0 ? ( 
       <div className={styles.nopost} > 
        <p>Nenhum post encontrado aqui..</p>
        <Link to={'/posts/create'} className='btn' >Criar Primeiro post.</Link>  
       </div>  )  
        : 
        (<> 
          <div className={styles.post_header} > 
            <span>Título</span>
            <span>Ações</span>
          </div>  
          
         {posts && posts.map((post) => ( <div key={post.id} className={styles.post_row} >
           <p>{post.title}</p>
          
           <div>
            <Link to={`/posts/${post.id}`} className='btn btn-outline'  >Ver</Link>

            <Link to={`/posts/edit/${post.id}`}  className='btn btn-outline' >Editar.</Link>
           
           <button  onClick={() => DeletedDocument(post.id)}   
           className='btn btn-outline btn-danger '
            >Excluir.</button>
           
           </div>
         </div>)
            )}
        </>) }
         

    </div>)
}

export default Dashboard