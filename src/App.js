import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import './styles/global.css';
import Promotions from './components/Promotions';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="App">
      <SEO />
      <Hero />
      <Features />
      <Promotions />
      <Footer />
    </div>
  );
}

export default App;
