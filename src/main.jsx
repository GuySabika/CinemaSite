import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import feildData from './feildData.js';
import MyLayout from './Layouts/MyLayout.jsx';
import App from './App.jsx';
import AddSelection from './Pages/AddSelection.jsx';
import AddCategory from './Pages/AddCategory.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<MyLayout />}>
          <Route index path="/" element={<App />} />
          <Route path="/add" element={<AddSelection />} />
          <Route path="/add/movie" element={<AddCategory DataFields={feildData.movie} category={"Movie"} />} />
          <Route path="/add/actor" element={<AddCategory DataFields={feildData.actor} category={"Actor"} />} />
          <Route path="/add/people" element={<AddCategory DataFields={feildData.people} category={"People"} />} />
          <Route path="/add/projection" element={<AddCategory DataFields={feildData.projection} category={"Projection"} />} />
          <Route path="/add/ticket" element={<AddCategory DataFields={feildData.ticket} category={"Ticket"} />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
