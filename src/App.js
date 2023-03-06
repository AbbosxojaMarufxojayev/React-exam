import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from "react-router-dom"
import { useSelector } from 'react-redux';
import Home from "./router/home/Home"
import Payment from "./router/payment/Payment"
import Truck from "./router/truck/Truck"
import Cart from "./router/cart/Cart"
import Like from "./router/like/Like"
import Admin from "./router/admin/Admin"
import SubHeader from './components/sub-header/SubHeader';
import Footer from './components/footer/Footer';

function App() {
  const cart = useSelector(s => s.cart)

  return (
    <div className="App">
      <Navbar/>
      <SubHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/truck' element={<Truck/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/like' element={<Like/>}/>


        <Route path='/admin/*' element={<Admin/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
