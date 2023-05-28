
import Load from './Load';
import SliderImg from './SliderImg';
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { setLoading ,setImgSlider} from '../../../store/slices/home';


export default function Slider(){
  const loading= useSelector(state=>state.home.imgSliderLoading) 


  const dispatch=useDispatch()
  useEffect(() => { 

      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        dispatch(setImgSlider({images:data.products})) 
        dispatch(setLoading({loading:false})) 
  });
     
  }, []);

  return (
    <>
 

 {
  loading?(<Load/>):(<SliderImg/>)
 }
    </>
  
    


  );
};