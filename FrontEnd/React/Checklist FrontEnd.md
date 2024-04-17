Instalar NPM com o comando "NPM install"
Digitar "npx create-react-app nome-do-projeto"
Entrar na pasta do projeto e instalar o react dom

npm install react-router-dom (Atualmente versão 6)

Inserir import BrowserRouter no arquivo Index.js como escrito abaixo:

    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import './index.css';
    import {BrowserRouter} from 'react-router-dom'
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );

Criar as páginas de Header, Loading, Principal e NotFound com textos semelhantes ao texto abaixo:

    import React, { Component } from 'react';

    export default class Header extends Component {
      render() {
        return (
          <h1>Header</h1>
        );
      }
    }

Inserir os dados no arquivo APP conforme exemplo abaixo:

    import React from 'react';
    import './App.css';
    import { Routes ,Route } from 'react-router-dom';
    import Principal from './Pages/Principal';
    import NotFound from './Pages/NotFound';

    export default function App() {
      return (
        <Routes>
          <Route path='/' element={ <Principal/> } />
          <Route path='*' element={ <NotFound/> } />
        </Routes>
      );
    }