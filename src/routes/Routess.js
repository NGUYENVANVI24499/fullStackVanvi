import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Home1 from '../pages/Home/Home1'
import Home2 from '../pages/Home/Home2'
import Home3 from '../pages/Home/Home3'
import Home4 from '../pages/Home/Home4'
import Home5 from '../pages/Home/Home5'

const Routess = () => {
  return (
    <Routes>
    <Route path= '/' exact  element= {<Home />} />
    <Route path= '/home1' exact  element= {<Home1 />} />
    <Route path= '/home2' exact  element= {<Home2 />} />
    <Route path= '/home3' exact  element= {<Home3 />} />
    <Route path= '/home4' exact  element= {<Home4 />} />
    <Route path= '/home5' exact  element= {<Home5 />} />
    
 </Routes>
  )
}

export default Routess