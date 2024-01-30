import React from 'react';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tarefas from './pages/Tarefas';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
    <Header /> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Tarefas />} />
      <Route path="/sobre" element={<Sobre />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;