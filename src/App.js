import React from 'react';
import './App.css'

// Component
import Navbar from './Components/Navbar'
import Top from './Components/Top'
import About from './Components/About'
import Program from './Components/Program'

function App() {
  return (

    <div className="container-fluid">
    <Navbar/>
    <Top/>
    <About/>
    <Program/>
    </div>  
  );
}

export default App;
