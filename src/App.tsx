import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PageSignIn from './pages/public/auth/PageSignIn'
import PageDashboard from './pages/dashboard/PageDashboard'
import Home from './pages/home/Home'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSignIn />} />

      <Route path='/home' element={<Home/>}>
        <Route path="dashboard" element={<PageDashboard />} />
        <Route path="transactions" element={<>Transitions</>} />
      </Route>
      <Route path='*' element={<>404 found</>}/>
    </Routes>
  )
}

export default App