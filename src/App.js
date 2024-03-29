import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NavBar from 'components/NavBar/NavBar';
import Timeline from 'components/NavBar/Timeline';
import Work from 'components/Work/Work';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Timeline />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/products" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;

