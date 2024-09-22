import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/auth/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
