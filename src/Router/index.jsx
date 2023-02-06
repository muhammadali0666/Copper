import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { AboutHeader } from '../Components/About__Header'
import { Home } from '../Pages/Home'

export const RouteWrapper = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/about' element={<AboutHeader/>}/> */}
    </Routes>
  )
}
