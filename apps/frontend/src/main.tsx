import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import axios from 'axios';
import { AuthProvider } from './app/AuthContext';
import { FilterProvider } from './app/context/FilterContext';
import { GlobalStyle } from './styles/index';

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AuthProvider>
      <FilterProvider>
        <GlobalStyle />
        <App />
      </FilterProvider>
    </AuthProvider>
  </StrictMode>,
);