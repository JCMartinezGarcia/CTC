import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react'
import axios from 'axios';
import App from './App.jsx'
import './index.css'
// Configura la URL base
axios.defaults.baseURL = 'http://localhost:8000/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
