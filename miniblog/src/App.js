import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import About from './Pages/About/about';
import Home from './Pages/Home/home';


import Login from './Login/login';
import Register from './Register/Register';
import { useAutentication } from './hoock/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './context/Authcontext';
import CreatePost from './Pages/Createpost/createpost';
import Dashboard from './Pages/Dashboards/dashboards';
import SearchDates from './Pages/Search/search';
import IndPosts from './Pages/Post/post';
import EditPost from './Pages/EditarPost.js/Editar';
import { FavoriteProvider } from './context/Anotercontext';




const favoritesKey = 'favorites'

function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAutentication()
  const loadingUser = user === undefined
  
  const [favorites, setfavorites] = useState([])
  
  

  console.log('testet here', user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
     
    })
  },[auth])
   
  const loadingFavorites = () => {
    const savePokemon= JSON.parse(window.localStorage.getItem(favoritesKey)) || []
    setfavorites(savePokemon)
   }
 
  useEffect(() => {
   loadingFavorites()
  },[])
 
  if(loadingUser){
    return <p>Loading ....</p>
  }

  const updateFavoritePokemons = (name) => {
    //create variable to caught all data with spring operator!!! 
    const updateFavorited = [...favorites]
    const favoritesIndex = favorites.indexOf(name)
    if(favoritesIndex >= 0){
      updateFavorited.splice(favoritesIndex,1) 
    }else{
      updateFavorited.push(name)
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updateFavorited))
    setfavorites(updateFavorited)
   }  





  return (
    <div className="App">
    <AuthProvider value={{user}}>

      <FavoriteProvider 
        value={{
        favoritepokemons:favorites, updatingpokemons:updateFavoritePokemons
         }}>  
     <BrowserRouter>
      <Navbar/> 
      

       <div className='container' >
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about'  element={<About/>} />
           
          <Route path='/search'  element={<SearchDates/>} /> 
          <Route path='/posts/:id' element={<IndPosts/>} />
          
          <Route path='/register' element={ !user ? <Register/> : <Navigate to='/' />  }  />
          
          <Route path='/login'  element={ !user ? <Login/> : <Navigate to='/'/> } /> 
            
           

          <Route path='/posts/edit/:id' element={ user ? <EditPost/> :  <Navigate to='/login' /> }  />


          <Route path='/posts/create' element={ user ? <CreatePost/> :  <Navigate to='/login' /> }  />

          <Route path='/dashboard' element={ user ? <Dashboard/> : <Navigate to='/login' /> } />


        </Routes>
       </div>
       
      <Footer/>
     </BrowserRouter>
     </FavoriteProvider>
    </AuthProvider> 
    </div>
  );
}

export default App;
