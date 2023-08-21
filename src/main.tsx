import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ModalProvider } from '@/context/ModalContext';
import { LocalStorageProvider } from '@/context/LocalStorageContext';
import { NavbarProvider } from '@/context/NavbarContext';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalStorageProvider>
        <ModalProvider>
          <NavbarProvider>
            <App />
          </NavbarProvider>
        </ModalProvider>
      </LocalStorageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
