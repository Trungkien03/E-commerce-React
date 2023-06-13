import React from 'react';
///import react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { AllProducts } from './pages/AllProducts';
import {SignUp} from './pages/SignUp'
import { Checkout } from './pages/Checkout';
import { ViewCart } from './pages/ViewCart';


const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/allProducts' element={<AllProducts/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/viewcart' element={<ViewCart/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
    </div>;
};

export default App;
