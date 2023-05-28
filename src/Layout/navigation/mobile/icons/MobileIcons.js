import React from 'react'
import Acount from './Acount'
import Home from './Home'
import Cart from './Cart'
import Sections from './Sections'

const MobileIcons = () => {
  return (
    <div className='mobile-icons-navigation'>
      <Home/>
      <Sections/>
      <Cart/>
      <Acount/>
    </div>
  )
}

export default MobileIcons
