import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Bag from '../Pages/Bag'
import Beauty from '../Pages/Beauty'
import Home from '../Pages/Home'
import Home_Living from '../Pages/Home_Living'
import Kids from '../Pages/Kids'
import Men from '../Pages/Men'
import Profile from '../Pages/Profile'
import Studio from '../Pages/Studio'
import Wishlist from '../Pages/Wishlist'
import Wishlish from '../Pages/Wishlist'
import Women from '../Pages/Women'

function AllRouter() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/men' element={<Men/>}></Route>
      <Route path='/women' element={<Women/>}></Route>
      <Route path='/kids' element={<Kids/>}></Route>
      <Route path='/home_living' element={<Home_Living/>}></Route>
      <Route path='/beauty' element={<Beauty/>}></Route>
      <Route path='/studio' element={<Studio/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path='/bag' element={<Bag/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    
    
    
    </div>
  )
}

export default AllRouter