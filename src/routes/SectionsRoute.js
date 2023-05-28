import { Routes, Route} from 'react-router-dom';
import Footer from '../Layout/footer/Footer';
import Sections from '../pages/sections/Sections';
const SectionsRoute = () => {
  return (
    <>
    <Routes>
   <Route path='sections' element={
    <>
   <Sections/>
   <Footer/>

    </>
   }/>
   </Routes>
  
    </>
  )
}

export default SectionsRoute
