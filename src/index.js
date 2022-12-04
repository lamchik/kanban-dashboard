import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/fonts/Roboto/stylesheet.css";
import {Global} from "./assets/globalStyle";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>
);