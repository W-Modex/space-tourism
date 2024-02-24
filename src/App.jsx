import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import homeImg from './assets/assets/home/background-home-mobile.jpg'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='overflow-hidden'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
