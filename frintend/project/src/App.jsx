import React from 'react'
import { Routes } from 'react-router-dom'

function Link1() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
    </div>
  )
}

export default Link1