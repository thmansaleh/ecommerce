import {useEffect} from 'react'

import { useDispatch ,useSelector} from 'react-redux';
import { pageActions } from '../../store/slices/pageIndex';
import AccountCards from './cards/AccountCards';
import Welcome from './welcom-header/Welcome';
import AccountNavBar from './account-bar/AccountNavBar';
import { OpenAccount } from './open-Account/OpenAccount';
const Acount = () => {
  const isLogIn =useSelector(state=>state.account.isLogIn)
    const dispatch=useDispatch()
    useEffect(() => {

      const navg = document.getElementById('mobile-navigation')
    navg.style.display='block'
      dispatch(pageActions.setPage({
        page:'acount'
  
    }))
    console.log(isLogIn)
    }, []);
  return (
    <div className='container'>
      
      {isLogIn?(
<>
        <Welcome/>
        <AccountCards/>
</>
      
    
      ):(<OpenAccount/>)}
      <AccountNavBar/>
      
    </div>
  )
}

export default Acount
