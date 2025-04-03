import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import UvodniStranka from './components/UvodniStranka';
import Sluzby from './components/Sluzby';
import Fotogalerie from './components/Fotogalerie';
import Kontakt from './components/Kontakt';
import KontejnerovaDoprava from './components/services/KontejnerovaDoprava';
import ZemniPrace from './components/services/ZemniPrace';
import StavebniPrace from './components/services/StavebniPrace';
import Stolarstvi from './components/services/Stolarstvi';
import UdrzbaZelene from './components/services/UdrzbaZelene';
import VsechnySluzby from './components/services/VsechnySluzby';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<UvodniStranka />} />
            <Route path="/sluzby" element={<Sluzby />} />
            <Route path="/sluzby/vsechny" element={<VsechnySluzby />} />
            <Route
              path="/sluzby/kontejnerova-doprava"
              element={<KontejnerovaDoprava />}
            />
            <Route path="/sluzby/zemni-prace" element={<ZemniPrace />} />
            <Route path="/sluzby/stavebni-prace" element={<StavebniPrace />} />
            <Route path="/sluzby/stolarstvi" element={<Stolarstvi />} />
            <Route path="/sluzby/udrzba-zelene" element={<UdrzbaZelene />} />
            <Route path="/fotogalerie" element={<Fotogalerie />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
