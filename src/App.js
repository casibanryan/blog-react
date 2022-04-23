import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './templates/Home';
import Contact from './templates/Contact';
import About from './templates/About';
import Post from './templates/Post';
import BlogListPage from './templates/BlogListPage';

function App() {

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      let scrollPos = 0;
      const mainNav = document.getElementById('mainNav');
      const headerHeight = mainNav.clientHeight;
      window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
          // Scrolling Up
          if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-visible');
          } else {
            console.log(123);
            mainNav.classList.remove('is-visible', 'is-fixed');
          }
        } else {
          // Scrolling Down
          mainNav.classList.remove(['is-visible']);
          if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
            mainNav.classList.add('is-fixed');
          }
        }
        scrollPos = currentTop;
      });
    })

  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<BlogListPage />} />
      <Route path='/post/:name' element={<Post />} />
    </Routes>
  );
}

export default App; 
