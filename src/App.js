import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './templates/Home';
import Contact from './templates/Contact';
import About from './templates/About';
import Post from './templates/Post';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='/post:name' element={<Post />} />
    </Routes>
  );
}

export default App;
