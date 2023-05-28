import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import MobileNavigation from './Layout/navigation/mobile/MobileNavigation';

import Cart from './routes/Cart';
import ProductRoute from './routes/ProductRoute';
import SectionsRoute from './routes/SectionsRoute';
import Home from './routes/Home';
import AcountRoute from './routes/AcountRoute';


function App() {
 
  

  return (
   <>
   <BrowserRouter>
   <Home/>
   <Cart/>
   <ProductRoute/>
   <SectionsRoute/>
   <AcountRoute/>
   {/* <ProfileRoute/> */}
   <MobileNavigation/>
  
   </BrowserRouter>
   </>
  );
}

export default App;
