import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import feildData from './feildData.js';
import App from './App.jsx';
import Login from './Pages/Login.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route>
          <Route index path="/" element={<App />} />
          <Route path="/home" element={<Login data={feildData} />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
