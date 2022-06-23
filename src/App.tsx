import React, { Suspense } from 'react';

import Footer from './componsents/Footer';
import Header from './componsents/Header';
import Home from './pages/Home';
//import Cart from './pages/Cart';
//import Product from './pages/Product';
import NotFound from './pages/NotFound';

import { Routes, Route, } from "react-router-dom";

const Cart = React.lazy(() => import('./pages/Cart'));
const Product = React.lazy(() => import('./pages/Product'));


const App: React.FC = () => {

  return (
    <div className='page'>
      <Header/>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={
            <Suspense fallback={<img src='https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif' />}>
              <Cart />
            </Suspense>
            } 
          />
          <Route path="/product/:id" element={
            <React.Suspense fallback={<img src='https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif' />}>
              <Product />
            </React.Suspense>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
