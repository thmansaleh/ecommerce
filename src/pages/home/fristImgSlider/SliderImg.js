import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { useState,useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { setLoading } from '../../../store/slices/home';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';


export default function SliderImg(){
  const images= useSelector(state=>state.home.imgSlider) 
  return (
    <Swiper modules={[Navigation, Pagination, Scrollbar,A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      Navigation Scrollbar     pagination={{ clickable: true }}   
     
 
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.length>1&&images.slice(1,6).map(e=>{
        return <SwiperSlide style={{ textAlign:'center',height:'45vh',width:'100%', margin:0}}>  <img src={e.thumbnail} className='w100  home-first-silder-img' alt="My Image" />
        </SwiperSlide>
      })}
 
    </Swiper>
  );
};