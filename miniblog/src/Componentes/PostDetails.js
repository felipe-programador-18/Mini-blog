
import styles from "./post.module.css"
import { Link } from 'react-router-dom'


const PostDetails = ({post}) => {
  

return (<div className={styles.post_detail} >
   <img src={post.image} alt={post.title} />
     <h2>{post.title}</h2>
     <p className={styles.create_by} > {post.createdBy} </p>
      
   <div className={styles.tags} >
    {post && post.tags.map((tag) => 
     (<p key={tag}>
      <span> {tag} </span>
        </p>)
     
     )}
   </div>
   <Link to={`/posts/${post.id}`}  className='btn btn-outline'> Ler. </Link>
    </div>  )

}


export default PostDetails