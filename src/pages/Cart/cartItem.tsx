import styles from './Cart.module.scss';
import { addItem, minus, removeItem } from '../../redux/cartSlice/slice';
import { useAppDispatch } from '../../redux/store';

type CartItemProps = {
  id: string;
  count: number;
  name: string;
  price: number;
  img: string;
  category: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, count, name, price, img, category }) => {
  const dispatch = useAppDispatch();

  const onClickAdd = () => {
    const item = { id, count, name, price, img, category }
    dispatch(addItem(item));
  }
  const onClickRemove = () => {
    const item = { id, count, name, price, img, category }
    dispatch(minus(item));
  }
  const onClickRemoveItem = () => {
    const item = { id, count, name, price, img, category }
    dispatch(removeItem(item));
  }

  return (
    <div className={ styles.item }>
      <img className={ styles.img } src={ img }/>
      <p>{ name }</p>
      <p>{ price * count } руб.</p>
      <p>Кол-во: { count }</p>
      <div className={ styles.buttons }>
        <button onClick={onClickAdd}>+</button>
        <p>{ count }</p>
        <button onClick={onClickRemove}>-</button>
      </div>
      <button onClick={onClickRemoveItem} className={ styles.delete }>Удалить</button>
    </div>
  );
}

export default CartItem;
