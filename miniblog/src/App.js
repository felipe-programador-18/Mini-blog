import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import About from './Pages/About/about';
import Home from './Pages/Home/home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div className='container' >
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about'  element={<About/>} /> 

      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
