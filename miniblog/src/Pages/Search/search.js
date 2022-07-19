import React from 'react'
//import styles from './search.module.css'
//imported hoock
import { useFecthingDocuments } from '../../hoock/useFecthingdocuments'
import { useQuerySearch } from '../../hoock/useQuery'
import PostDetails from '../../Componentes/PostDetails'
import { Link } from 'react-router-dom'


const SearchDates = () => {
   const query =  useQuerySearch()
   const search = query.get("q")
   console.log("testing about search", search)
    
   const {documents:posts} = useFecthingDocuments("posts",search)
   console.log("here have my documents", posts)


   return (
   <div>
      <h2>Search</h2> 
      <div>
         {posts&& posts.length === 0 && (
            <>
            <p>Não foram encontrados nada na sua pesquisa</p>
            <Link to={"/"} className="btn btn-dark" >Voltar</Link>
            </>
         )}
         
         
         {posts && posts.map((post) => (
           <PostDetails key={post.id}  post={post} />
          ) )}
         
      
      </div>
      
   </div>)

}

export default SearchDates