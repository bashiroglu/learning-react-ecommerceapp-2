import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* this BrowserRouter HOF and by this we get functionality
 of routing in react, kinda take our whole component and add routing 
 func , give back */
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    /* that is why we wrap our comp with that */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
