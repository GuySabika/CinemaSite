import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { feildData } from './feildData.js';
import App from './App.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/SignUp.jsx';
import UserHomePage from './Pages/UserHome.jsx';
import ShowAllCategory from './Pages/ShowAllCategory.jsx';
import ShowElement from './Pages/ShowElement.jsx';
import MyLayout from './Layouts/MyLayout.jsx';

const url = "http://192.168.1.253:3000/";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<MyLayout />}>
          <Route index path="/" element={<App />} />
          <Route path="/login" element={<Login data={feildData} serverLink={url} />} />
          <Route path="/signup" element={<Signup data={feildData} serverLink={url} />} />
          <Route path="/homepage" element={<UserHomePage data={feildData} />} />
          <Route path="/homepage/movie" element={<ShowAllCategory serverLink={url} category={"movie"}></ShowAllCategory>} />
          <Route path="/homepage/actor" element={<ShowAllCategory serverLink={url} category={"actor"}></ShowAllCategory>} />
          <Route path="/homepage/ticket" element={<ShowAllCategory serverLink={url} category={"ticket"}></ShowAllCategory>} />
          <Route path="/movie/:id" element={<ShowElement serverLink={url} category={"movie"} />} />
          <Route path="/actor/:id" element={<ShowElement serverLink={url} category={"actor"} />} />
          <Route path="/ticket/:id" element={<ShowElement serverLink={url} category={"ticket"} />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
