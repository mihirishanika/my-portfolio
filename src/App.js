// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Hero from './components/Hero';
import Hero from './components/Experiences';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Experiences />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
