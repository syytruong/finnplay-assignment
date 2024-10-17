import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);