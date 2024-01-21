import React from 'react';
import './App.css';
import LivroLista from './views/LivroLista';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LivroDados from './views/LivroDados';
import TopBar from './componentes/TopBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' Component={LivroLista} />
          <Route path='/dados' Component={LivroDados} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
