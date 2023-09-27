import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PageSignIn from './pages/public/auth/PageSignIn'
import PageDashboard from './pages/dashboard/PageDashboard'
import PageHome from './pages/home/PageHome'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSignIn />} />

      <Route path='/home' element={<PageHome />}>
        <Route index element={<PageDashboard />} />
        <Route path="transactions" element={<>Transitions</>} />
      </Route>
      <Route path='*' element={<>404 found</>} />
    </Routes>
  )
}

export default App