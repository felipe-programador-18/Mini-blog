
import styles from "./Postmodule.css"
import { Link } from 'react-router-dom'


const PostDetails = ({post}) => {
  
  console.log('here posts', post)
return (<div>
   <img src={post.image} alt={post.title} />
    <h2>{post.title}</h2>
     <p> {post.createdBy} </p>
      
   <div>
    <p> {post.title} </p>
    <p> <span>{post.tags}</span> </p>

    {post && post.tags.map((tag) => <p key={tag}> test {tag} </p>)}

   </div>
   <Link to={`/posts/${post.id}`}  className='btn btn-outline'> Ler. </Link>
    </div>  )

}


export default PostDetails