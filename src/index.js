import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './assets/pages/home';
import Logadm from './assets/pages/loginadm';
import Login from './assets/pages/login';
import Consulta from './assets/pages/editarproduto';
import Cadastro from './assets/pages/cadastrar';
import Minhascompras from'./assets/pages/minhascompras';
import Carrinho from './assets/pages/carrinho';
import Paypix from './assets/pages/paypix';






import {BrowserRouter, Routes, Route} from 'react-router-dom';

  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>} /> 
      <Route path= '/loginadm' element={<Logadm/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/consulta' element= {<Consulta/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/minhascomprass' element={<Minhascompras/>} />
      <Route path='/carrinho' element={<Carrinho/>} />
      <Route path='/paypix' element={<Paypix/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
