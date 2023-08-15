import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Contato from './pages/contatos';
import Media from './pages/media';
import Tarefas from './pages/tarefas';
import Aluno from './pages/inf-alunos';
import Carro from './pages/carro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' exact={true} element={<Home/>}></Route>
        <Route path='/contato' exact={true} element={<Contato/>}></Route>
        <Route path='/media' exact={true} element={<Media/>}></Route>
        <Route path='/tarefa' exact={true} element={<Tarefas/>}></Route>
        <Route path='/aluno' exact={true} element={<Aluno/>}></Route>
        <Route path='/carro' exact={true} element={<Carro/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
