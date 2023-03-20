import React from 'react'
import HomePage from './HomePage'
import Tools from './Tools'
import Battery from './Battery'
import SelectImage from './SelectImage'
import Validate from './Validate'

import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/battery' element={<Battery />} />
          <Route path='/selectimage' element={<SelectImage />} />
          <Route path='/validate' element={<Validate />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
