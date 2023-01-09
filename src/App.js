import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
// import Navigation from './components/Navigation';


function App() {

  return (
  
    <>
      {/* <Navigation /> */}

      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/competences' element={ <Competences /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
        <Route path='*' element={ <NotFound /> } /> 

      </Routes>
    </>
   
  );
}

export default App;
