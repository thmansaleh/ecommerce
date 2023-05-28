import { Routes, Route} from 'react-router-dom';
import Footer from '../Layout/footer/Footer';
import Product from '../pages/product/Product';
const ProductRoute = () => {
  return (
    <>
    <Routes>
   <Route path='/product' element={
    <>
   <Product/>
   <Footer/>
    </>
   }/>
   </Routes>
  
    </>
  )
}

export default ProductRoute
