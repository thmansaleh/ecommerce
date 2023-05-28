import {useEffect} from 'react'
import './style.css';
import { useSelector,useDispatch } from 'react-redux';
import { setProducts } from '../../../store/slices/home';
import Item from './Item';

export default   function Products() {
    const products=useSelector(state=>state.home.products)
    const dispatch=useDispatch()
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=99')
        .then(res => res.json())
        .then(data => {
           dispatch(setProducts({
            products:data.products
           }))
          
    });
       
    }, []);
   
    return (

        <div className='home-products mt-5 container'>
            <h5>Products</h5>
            <Item/>
            
        </div>

    )
}
