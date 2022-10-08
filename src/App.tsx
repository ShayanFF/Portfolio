import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
  const [navBarPosition, setNavBarPosition] = useState<string>("CENTER");

  return (
    <BrowserRouter>
        <div className='app-container'>
          <NavBar />
          <Routes>
            <Route path='/'></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
