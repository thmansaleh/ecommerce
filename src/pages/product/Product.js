
import { useEffect ,useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { setProduct,setLoading } from '../../store/slices/product';

import Description from './product-description/Description'
import Information from './product-iformation/Information'
import Slider from './product-slider/Slider'
import './style.css'

function Product() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

 
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  console.log(id)
  useEffect(() => {
    const navg = document.getElementById('mobile-navigation')
    navg.style.display='none'
    dispatch(setLoading({loading:true}))

    window.scrollTo({top: 0,  behavior: 'auto'});
    fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data=>{

  console.log(data)
  if (data.message) {
    navigate('/')
  } else {
    dispatch(setProduct({product:data}))
    dispatch(setLoading({loading:false}))
  }
 
  
}
  );
  }, []);

    return <div className=''>

    <div className='product-slider-container'>
    <Slider/>
    <Information/>
    </div>

    <Description/>
   


  </div>
  }
 


export default Product
