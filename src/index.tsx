import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { server } from './server';

server();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);