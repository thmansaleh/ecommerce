import React from 'react'
import AccountBarItem from './Account'
import Cards from './Cards'
import Address from './Address'
import Heple from './Heple'
import Setting from './Setting'
import Logout from './Logout'
import { useSelector } from 'react-redux'
import './style.css'

const AccountNavBar = () => {
  const isLogIn =useSelector(state=>state.account.isLogIn)
  return (
    <div>
      <AccountBarItem link='./profile'  />
      <Cards  link='./cards'  />
      <Address  link='./address' />
      <Heple link='./helpe'/>
      <Setting/>
      {isLogIn&&(<Logout/>)}
     
    </div>
  )
}

export default AccountNavBar
