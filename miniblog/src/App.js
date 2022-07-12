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







function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAutentication()
  const loadingUser = user === undefined
  
  console.log('testet here', user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  },[auth])
 
  if(loadingUser){
    return <p>Loading ....</p>
  }




  return (
    <div className="App">
    <AuthProvider value={{user}} >
     <BrowserRouter>
      <Navbar/> 
       <div className='container' >
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about'  element={<About/>} /> 
          
          <Route path='/register' element={ !user ? <Register/> : <Navigate to='/' />  }  />
          
          <Route path='/login'  element={ !user ? <Login/> : <Navigate to='/'/> } /> 

          <Route path='/posts/create' element={ user ? <CreatePost/> :  <Navigate to='/login' /> }  />

          <Route path='/dashboard' element={ user ? <Dashboard/> : <Navigate to='/login' /> } />


        </Routes>
       </div>
       
      <Footer/>
     </BrowserRouter>
    
    </AuthProvider> 
    </div>
  );
}

export default App;
