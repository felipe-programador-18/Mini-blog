import React from 'react'
import styles from './post.module.css'
import {useParams} from 'react-router-dom'
import { useFecthingDocument } from '../../hoock/useFecthDocuments'


const IndPosts = () => {
   const {id} = useParams()
   const {document:post, loading} = useFecthingDocument("posts",id)
   console.log("here document", post)
   console.log("here key", id)
   return(<div className={styles.post_container} >
         {loading && <p>carregando post ....</p>}
       <h1>posts </h1>
       
       
       {post && (<>
          
         <h3> {post.title} </h3>
         <img src={post.image} alt={post.title} />
         <p>{post.body}</p>
         <h3>Esse post trata sobre:</h3>
         {post.tags.map((tag) => (
            <p key={tag} ><span> {tag} </span> </p>
         ))}
       
       </>) }
      
       
    </div> )
}

export default IndPosts