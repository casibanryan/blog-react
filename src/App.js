import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './templates/Home';
import Contact from './templates/Contact';
import About from './templates/About';

function App() {
  return (
  <Routes>

     <Route path='/' element={<Home />} />
     <Route path='/contact' element={ <Contact /> } />
     <Route path='about' element={ <About /> } />

</Routes>
);
}

export default App;
