import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import Settings from '../pages/Settings'

const Router = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/dashboard' element={<Dashboard />} />}
        errorElement={<NotFound />}
      />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/settings ' element={<Settings />} />
    </Routes>
  )
}

export default Router
