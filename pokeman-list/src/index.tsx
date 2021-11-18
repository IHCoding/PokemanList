import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PokemonProvider } from './context/pokemon-context';

ReactDOM.render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
