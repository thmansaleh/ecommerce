import React,{useEffect} from 'react'
import Category from './category/Category'
import Slider from './fristImgSlider/Slider'
import Products from './products/Products'
import { useDispatch } from 'react-redux';
import { pageActions } from '../../store/slices/pageIndex';
import Filp from '../../Layout/filp/Flip';
import { Header } from '../../Layout/header/Header';

function HomePage() {
  const dispatch=useDispatch()
  useEffect(() => {
    const navg = document.getElementById('mobile-navigation')
    navg.style.display='block'
    dispatch(pageActions.setPage({
      page:'home'

  }))
  }, []);

  return (
    <>
    <Header/>
    <Filp/>
      <Slider/>
      <Category/>
      <Products/>
    
    </>
  )
}

export default HomePage
