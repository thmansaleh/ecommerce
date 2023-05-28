import { Swiper, SwiperSlide } from 'swiper/react';
import {  FreeMode, Scrollbar } from 'swiper';


import './style.css'
import "swiper/css/free-mode";

export default function Slider({items}){
  return (
    <Swiper
    slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode,Scrollbar]}
        // className="mySwiper"
  >
    {items.slice(10).map(e=>{
      return(
      <SwiperSlide

      >
        <div  className='home-category-slider' >
        <img className='mx-4 home-category-img ' src={e.thumbnail} alt='img'/>
        <span className='home-category-name text-center'>{e.title}</span>

        </div>
         </SwiperSlide>
      )
      })}
  </Swiper>
 
  );
};