import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportedBy from './components/SupportedBy';
import UnlockTheFuture from './components/UnlockTheFuture';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SupportedBy />
      <UnlockTheFuture />
    </div>
  );
};

export default App;
