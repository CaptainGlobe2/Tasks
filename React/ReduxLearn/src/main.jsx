import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/store.jsx';
import {BrowserRouter as Router } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Router>
  <React.StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
    
  </React.StrictMode>
  </Router>
  </Provider>,
)
