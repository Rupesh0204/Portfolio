import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;