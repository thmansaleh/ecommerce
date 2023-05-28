import Filp from '../../../Layout/filp/Flip'
import { useSelector ,useDispatch} from 'react-redux';
import { addToCart } from '../../../store/slices/cart';
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Information = () => {
  const product =useSelector(state=>state.product.product)
  const loading =useSelector(state=>state.product.loading)
  const notify = () =>  toast.success('Added Successful', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  const dispatch= useDispatch()

  console.log('information')

  return  !loading&&(<div class="product-information">
  <span>{product.title}</span>
  <span class="product-description">ROUND TOE LOW TOP SNEAKERS</span>
  <div class="product-prices-container">
    <div>
      <span>{product.price} AED</span>
      <span>{Math.round(product.price+product.price* product.discountPercentage/100)} AED</span>
    </div>
    <span>On Sale -{product.discountPercentage}% Off</span>
  </div>
  <div class="product-delivery-title">
    <span>Delivery by </span>
    <span>10 May, Wednesday</span>
  </div>
  <Filp/>
  <button onClick={()=>{
    dispatch(addToCart({
      item:product
    }))
    notify()

  }}
  >ADD TO BAG</button>
  <ToastContainer />

</div>)
  
}

export default Information