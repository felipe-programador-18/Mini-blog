import React, {useState} from 'react'
import styles from  "./home.module.css"

import { useNavigate, Link} from 'react-router-dom'
import { useFecthingDocuments } from '../../hoock/useFecthingdocuments'


//components
import PostDetails from '../../Componentes/PostDetails'



const Home = () => {
    const {documents:posts, loading}  = useFecthingDocuments("posts")
    const [query, setQuery] = useState('')
     
   const navigate = useNavigate() 

   const handSubmit = (e) => {
        e.preventDefault()

       if(query){
        return navigate(`/search?q=${query}`)
       }
    
    } 
    
    return(
    <div  className={styles.home}>
      <h1>Veja nossos postes mais recentes.</h1>

      <form onSubmit={handSubmit} className={styles.search_form} >
        <label >
            <input type="text" placeholder='ou busque por tags...' onChange={(e) => setQuery(e.target.value)}  />
        </label>
        <button className='btn btn-dark' >Pesquisar.</button>
      
      </form>
      
      
      <div>
        {loading && <p>Carregando .....</p> }
        

        {posts && posts.map((post) => <PostDetails key={post.id} post={post} /> ) }
       
        {posts && posts.length === 0 && (
          <div className={styles.nopost}>
            <p> Não foram encontrados posts. </p>
            
            <Link to='/posts/create'  className='btn' > Crie seu Primeiro Post. </Link>
            </div>
        ) }
  
           
      </div>
    
    </div>
    )
}

export default Home