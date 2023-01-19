import React from 'react'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Color from './components/Color';
import Id from './components/Id';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/:id" element={<Id />} />
      <Route path="/:hello/:color1/:color" element={<Color />} />
    </Routes>
  )
}

export default App