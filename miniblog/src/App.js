import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import Login from './Login/login';
import About from './Pages/About/about';
import Home from './Pages/Home/home';
import Register from './Register/Register';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/> 
      <div className='container' >
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about'  element={<About/>} /> 
          <Route path='/register' element={ <Register/> }  />
          <Route path='/login'  element={ <Login/> } /> 

        </Routes>
      </div>

      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
