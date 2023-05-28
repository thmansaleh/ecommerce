import {useEffect} from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { pageActions } from '../../store/slices/pageIndex';
import { useSelector } from 'react-redux';
import Main from './main/Main';
import Empty from './empty-cart/Empty';

function CartPage() {
  const dispatch=useDispatch()
  const cartItems =useSelector(state=>state.cart.cartItems)
  useEffect(() => {
    const navg = document.getElementById('mobile-navigation')
    navg.style.display='block'
    dispatch(pageActions.setPage({
      page:'cart'

  }))
  }, []);
  return (
    <div className='cart-container'>
      {cartItems.length>0?(<Main/>):(<Empty/>)}
   
    </div>
  )
}

export default CartPage
