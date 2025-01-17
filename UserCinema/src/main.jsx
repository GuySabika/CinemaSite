import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import feildData from './feildData.js';
import App from './App.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import UserHomePage from './Pages/UserHome.jsx';
import ShowAllCategory from './Pages/ShowAllCategory.jsx';

const url = "http://127.0.0.1:3000";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route>
          <Route index path="/" element={<App />} />
          <Route path="/login" element={<Login data={feildData} serverLink={url} />} />
          <Route path="/signup" element={<Signup data={feildData} serverLink={url} />} />
          <Route path="/homepage" element={<UserHomePage data={feildData} />} />
          <Route path="/movie" element={<ShowAllCategory serverLink={url} category={"movies"}></ShowAllCategory>} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
