
import {Routes,Route} from  'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Payment from '../pages/payment'
import Private from './Private'

export default function AllRoutes(){
 return(
   <Routes>
      <Route path = '/'  } element={<Home/>} />
      <Route path = '/cart' element={<Private> <Cart/> </Private>} />
      <Route path = 'payment' element={<Payment/>} />
   </Routes>
 )
}