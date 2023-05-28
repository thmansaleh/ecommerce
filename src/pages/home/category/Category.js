import {useEffect} from 'react'
import Slider from './Slider'
import { useDispatch,useSelector } from 'react-redux'
import { setCategoryImg } from '../../../store/slices/home'


function Category() {
  const items =useSelector(state=>state.home.categoryImg)
  const dispatch=useDispatch()
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
       dispatch(setCategoryImg({
        items:data.products
       }))
      
});
   
}, []);
  
  return (
    <div className='mt-5 container'>
      <div className=''>
        {/* <h5 className='home-category-title'>Category</h5> */}
        {items.length>0&&(<Slider items={items}/>)}
        
      </div>
    </div>
  )
}

export default Category
