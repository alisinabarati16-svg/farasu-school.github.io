import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { News } from './pages/News';
import { Achievements } from './pages/Achievements';
import { Teachers } from './pages/Teachers';
import { Students } from './pages/Students';
import { Futsal } from './pages/Futsal';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/futsal" element={<Futsal />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
