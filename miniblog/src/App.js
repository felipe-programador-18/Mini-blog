import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import About from './Pages/About/about';
import Home from './Pages/Home/home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/> 
      <div className='container' >
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/about'  element={<About/>} /> 

        </Routes>
      </div>

      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
