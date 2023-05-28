import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useSelector} from 'react-redux';
import './style.css'

import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Load from '../../home/fristImgSlider/Load';
import CartFavortiteIcons from './CartFavortiteIcons';
import { ArrowBack } from '../../../Layout/arrow-back/ArrowBack';


export default function Slider() {
  const product =useSelector(state=>state.product.product)
  const loading =useSelector(state=>state.product.loading)

return <>

{loading?
(<Load/>):
(<Swiper className='product-swiper-container' modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={50}
rewind={true}
slidesPerView={1}
navigation Scrollbar pagination={{ clickable: true }}

>
{product.images.map(e => {
  return <SwiperSlide style={{ textAlign: 'center', height: '50vh', width: '100%', margin: 0 }}>
    <img className="w-100 product-img-slider" src={e} alt="My Image" /></SwiperSlide>
})}


<CartFavortiteIcons/>
<ArrowBack/>


</Swiper>)}

</>

};