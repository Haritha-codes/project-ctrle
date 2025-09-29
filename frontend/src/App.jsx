import React from 'react';
import './App.css';

import Home from './pages/Home';
import Client from './pages/Client';
import About from './pages/About';
import Project from './components/Project'; 
import Standardedit from './components/Standardedit'; 
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      
      <section id="home">
        <Home />
        <hr className="page-divider" />
      </section>

      <section id="about">
        <About />
        <hr className="page-divider" />
      </section>

      <section id="project">
        <Project />
        <hr className="page-divider" />
      </section>

      <section id="client">
        <Client />
        <hr className="page-divider" />
      </section>

      <section id="standardedit">
        <Standardedit />
        <hr className="page-divider" />
      </section>
    </>
  );
}

export default App;
