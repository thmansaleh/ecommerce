import { Routes, Route} from 'react-router-dom';
import CartPage from '../pages/cart/CartPage';

const Cart = () => {
  return (
   <Routes>

    <Route path='cart' element={
      <>
<CartPage/>
</>
    
  }/>
  </Routes>
    

  )
}

export default Cart
