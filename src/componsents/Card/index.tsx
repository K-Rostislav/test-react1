import React from 'react';
import styles from './Card.module.scss';
import { addItem } from '../../redux/cartSlice/slice';
import { useDispatch } from 'react-redux';

type CardProps = {
  id: string;
  name: string;
  price: number;
  img: string;
  category: number;
  count: number;
}

const Card: React.FC<CardProps> = ({ id, count, name, price, img, category}) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = { id, count, name, price, img, category }
    dispatch(addItem(item));
  }

  return (
    <div className={ styles.card }>
        <div className={ styles.img }>
            <img src={ img } />
        </div>
        <div className={ styles.description }>
            <p className={ styles.name }>{ name }</p>
            <div>
                <p className={ styles.price }>в наличии</p>
                <p className={ styles.in_stock }>{ price }руб</p>
            </div>
        </div>
        <button onClick={(event) => {onClickAdd(); event.preventDefault()}}>Добавить в корзину</button>
    </div>
  );
}

export default Card;
