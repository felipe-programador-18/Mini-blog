import React from 'react'
import styles from "./dashboard.module.css"
import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/Authcontext'
import { useFecthingDocuments } from '../../hoock/useFecthingdocuments'



const Dashboard = () => {
    // get post of users!!!
    const{user} = useAuthValue()
    const uid = user.uid 
    const {documents:posts, loading} =useFecthingDocuments('posts', null, uid)
  
    console.log('test in dash', posts)
    


    return(<div className={styles.dashcontainer} >

      
     <h2>Dashboards!!</h2>
     <p>Gerencie os seus posts!</p>
       
       {posts && posts.length === 0 ? ( 
       <div className={styles.nopost} > 
        <p>Nenhum post encontrado aqui..</p>
        <Link to={'/posts/create'} className='btn' >Criar Primeiro post.</Link>  
       </div>  )  
        : 
        (<div>
          <p>Tem posts aqui </p>  
        </div> ) }
         
         {posts && posts.map((post) => (<h2 > {post.title} </h2>)) }

    </div>)
}

export default Dashboard