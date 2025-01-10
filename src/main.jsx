import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MyLayout from './Layouts/MyLayout.jsx'
import App from './App.jsx'
import AddSelection from './Pages/AddSelection.jsx'
// import FindMeal from './Pages/FindMeal.jsx'
// import MealsId from './Pages/IdMeal.jsx'
// import Ingredients from './Pages/Ingredients.jsx'
// import IngredientMeal from './Pages/IngredientMeal.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<MyLayout />}>
          <Route index path="/" element={<App />} />
          <Route path="/add" element={<AddSelection />} />
          {/* <Route path="/add" element={<AddSelection />} />
          <Route path="/add/movie" element={<AddMovie />} />
          <Route path="/add/actor" element={<AddActor />} />
          <Route path="/add/people" element={<AddPeople />} />
          <Route path="/add/projection" element={<AddProjection />} />
          <Route path="/add/ticket" element={<Ticket />} /> */}
        </Route>
      </Routes>
    </StrictMode >
  </BrowserRouter>
)
