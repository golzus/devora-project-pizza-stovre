
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
const darkPinkBlueTheme = createTheme({
  direction: 'rtl', 
  palette: {
    mode: 'dark',
    primary: {
      main: '#b71c1c'

    },
    secondary: {
      main: '#448aff', // כחול כהה
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Arial',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={darkPinkBlueTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);