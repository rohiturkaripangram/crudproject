import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { ContextProvider } from './Context/DataContext';
import {BrowserRouter as Router} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
      <App />
      </Router>
    
    </ContextProvider>
    
  </React.StrictMode>
);

