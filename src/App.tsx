import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Login from './pages/auth/Login'
import PrivateRoute from './routes'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PrivateRoute element={<Home />} />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
