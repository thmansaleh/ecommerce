import { Routes, Route} from 'react-router-dom';
import Footer from '../Layout/footer/Footer';
import HomePage from '../pages/home/HomePage';
const Home = () => {
  return (
    <>
    <Routes>
   <Route path='/' element={
    <>
   <HomePage/>
   <Footer/>
    </>
   }/>
   </Routes>
  
    </>
  )
}

export default Home
