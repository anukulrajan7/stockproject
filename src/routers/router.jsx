import { Routes,Route } from "react-router-dom";
import Home from "../pages/home/index";
import Derivative from "../pages/other/index";
import React from 'react'

function router() {
  return (
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/client" element={<Derivative/>}/>
       </Routes>
  )
}

export default router