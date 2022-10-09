import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles';

import Routes from './routes';
import history from './services/history';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router history={history}> 
      <Routes />
      <GlobalStyle />
    </Router>
  </React.StrictMode>
);
