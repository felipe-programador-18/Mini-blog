import React, {useState} from 'react'
import styles from  "./home.module.css"

import { useNavigate, Link } from 'react-router-dom'




const Home = () => {
    const [query, setQuery] = useState('')
    const [posts] = useState([])
    
    
    const handSubmit = (e) => {
        e.preventDefault()

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
        <h1>Posts...</h1>
        {posts && posts.length === 0 && (
            <div className={styles.nopost}>
            <p> Não foram encontrados posts. </p>
            
            <Link to='/posts/create'  className='btn' > Crie seu Primeiro Post. </Link>
            </div>
        )  }
      </div>
    
    </div>
    )
}

export default Home