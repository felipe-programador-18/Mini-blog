import React from 'react'
import styles from './post.module.css'
import {useParams} from 'react-router-dom'

const IndPosts = () => {
   const {id} = useParams()
   
   return(<div>
       <h1>posts</h1>
       {id}
    </div> )
}

export default IndPosts