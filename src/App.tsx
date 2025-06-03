import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import CompanyInfo from './components/Profile';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Services />
      <Blog />
      <Contact />
      <CompanyInfo />
    </div>
  );
}

export default App;
