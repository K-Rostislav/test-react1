import React, { Suspense } from 'react';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { Routes, Route, } from "react-router-dom";
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import('./pages/Cart'));
const Product = React.lazy(() => import('./pages/Product'));


const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>} />
        <Route path="cart" element={
          <Suspense fallback={<img src='https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif' />}>
            <Cart />
          </Suspense>
          } 
        />
        <Route path="product/:id" element={
          <React.Suspense fallback={<img src='https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif' />}>
            <Product />
          </React.Suspense>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
