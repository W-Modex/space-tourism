import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './pages/Home/Home.jsx'
import Destination from './pages/Destination/Destination.jsx'
import Crew from './pages/Crew/Crew.jsx'
import Technology from './pages/Technology/Technology.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='space-tourism/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='crew' element={<Crew />} />
      <Route path='technology' element={<Technology />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
