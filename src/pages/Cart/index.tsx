import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

import CartItem from './cartItem';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {

  const product = useSelector((state: RootState) => state.cartSlice.items);
  const count = useSelector((state: RootState) => state.cartSlice.count);


  if (count == 0) {
    return (
     <h1 style={{position: 'absolute', top: '25%', left: '35%', fontSize: '30px'}}>Корзина пуста <Link to='/'>вернуться на главную</Link></h1>
    );
  }

  return (
    <div className={ styles.container }>
      {
        product.map((obj) => (
          <CartItem id={obj.id} count={obj.count} name={obj.name} price={obj.price} img={obj.img} key={obj.id} category={obj.category}/>
        ))
      }
    </div>
  );
}

export default Cart;
