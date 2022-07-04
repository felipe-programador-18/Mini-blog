import styles from './nav.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return (<div>
    <nav>
     <NavLink to='/'>
      Mini <span>Blog</span>   
     </NavLink> 
      
      <ul>
        <li>
         <NavLink to='/'> Home</NavLink>     
        </li>
        <li>
         <NavLink to='/about'> Sobre </NavLink>
        </li>
      </ul>
    
    </nav>
  
</div>
  )}

export default Navbar