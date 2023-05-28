import {useEffect,useState} from 'react'
import Item from './Item'
import './style.css'
import { useDispatch,useSelector } from 'react-redux';
import { pageActions } from '../../store/slices/pageIndex';
import { setItems,setLoading } from '../../store/slices/sections';
import Load from './Load';
import { Header } from '../../Layout/header/Header';

const Sections = () => {
  const dispatch=useDispatch()
  const loading =useSelector(state=>state.sections.loading)

  useEffect(() => {
    const navg = document.getElementById('mobile-navigation')
    navg.style.display='block'
    dispatch(pageActions.setPage({
      page:'sections'

  }));

  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    dispatch(setItems({items:data.products}))
    dispatch(setLoading({loading:false}))
    
});
  }, []);
  return (
    <div className='sections-container'>
      <Header/>
        <h3 className='sections-title'>sections</h3>
      {loading&&(<Load/>)}
<Item/>
    </div>
  )
}

export default Sections