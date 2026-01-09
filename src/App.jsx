import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import Cursor from './components/Cursor'; // Import Cursor
import './App.css';

function App() {
  return (
    <div className="App">
      <Cursor /> {/* Render Cursor */}
      <Header />
      <main>
        <Home />
        <Services />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
