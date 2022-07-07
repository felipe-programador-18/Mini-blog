import styles from './nav.module.css'
import { NavLink } from 'react-router-dom'

import { useAutentication } from '../hoock/useAuthentication'
import { useAuthValue } from '../context/Authcontext'

const Navbar = () => {
  //caught user about create providers
  const {user} = useAuthValue()
  console.log('verify here' , user)

  return (<div>
    <nav className={styles.navbar} >
     <NavLink to='/' className={styles.brand} >
      Mini <span>Blog</span>   
     </NavLink> 
      
      
      <ul className={styles.links_list} >
        <li>
         <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '' ) } > Home</NavLink>     
        </li>
        
         {!user && (<>
          <li>
            <NavLink to='/login' className={({isActive}) => (isActive ? styles.active : '' ) } > Entrar</NavLink>     
          </li>
          <li>
            <NavLink to='/register' className={({isActive}) => (isActive ? styles.active : '' ) } > Registrar</NavLink>     
          </li>
           
         </>) }
          
        {user && ( <>
          <li>
          <NavLink to='/posts/create' className={({isActive}) => (isActive ? styles.active : '' ) } >Novo Post</NavLink>     
        </li>
        <li>
          <NavLink to='/dashboard' className={({isActive}) => (isActive ? styles.active : '' ) } > Dashboard</NavLink>     
        </li>

         </>)}  
            
        <li>
         <NavLink to='/about'  className={({isActive}) => (isActive ? styles.active : '') }  > Sobre </NavLink>
        </li>
      </ul>
    
    
    
    
    </nav>
  
</div>
  )}

export default Navbar