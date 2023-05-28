import { Routes, Route} from 'react-router-dom';
import Acount from '../pages/account/Acount';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Cards from '../pages/cards/Cards';
import Address from '../pages/address/Address';
import Profile from '../pages/account/profile/Profile';
const AcountRoute = () => {
  return (
   <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/account' element={<Acount/>}/>
    <Route path='/account/profile' element={<Profile/>}/>
    <Route path='/account/cards' element={<Cards/>}/>
    <Route path='/account/address' element={<Address/>}/>

  </Routes>
    

  )
}

export default AcountRoute
