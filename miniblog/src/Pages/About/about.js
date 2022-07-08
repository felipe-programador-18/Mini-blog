import React from 'react'
import { Link } from 'react-router-dom'
import styles from './about.module.css'

const About  = () => {
  return (<div className={styles.about} >

   <h2>Sobre  o Mini <span>Blog</span>   </h2>
   <p>Esse projeto é um projeto com React no Front-End e Firebase no Bakc-end. </p>
   <h3>This is project together work with react and firebase is lot interesting for users, posted them all idea's.</h3>
   <Link to='/posts/create' className='btn'  >Criar Post</Link>

  </div> )
}

export default About