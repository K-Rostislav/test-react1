import styles from './Header.module.scss';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setSearch } from '../../redux/searchSlice/slice';
import { selectSort, setCategoryId } from '../../redux/filterSlice/slice';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();

    const [searchValue, setSearchValue ] = React.useState('');
    const {count, items} = useSelector((state: RootState) => state.cartSlice);

    const location = useLocation();

    const dd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        pp(event);
    }
    const pp = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(event.target.value));
    }, 500);

    const flag = React.useRef(false);
    
    useEffect (() => {
        if(flag.current){
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json);
            const countJson = JSON.stringify(count);
            localStorage.setItem('count', countJson);
        }
        flag.current = true;
    }, [count]);

    const clearUrl = () => {
        dispatch(setCategoryId(0));
        dispatch(selectSort(''));
        dispatch(setSearch(''));
    }

    return (
        <header className = { styles.header }>
            <div className = { styles.container }>
                <Link to="/"><div onClick={clearUrl} className = { styles.logo }>Logo</div></Link>
                {location.pathname == '/' && <input value={searchValue} onChange={dd}  placeholder='Поиск' type="text" />}
                <nav>
                    <ul className = { styles.navigation }>
                        <li>
                           <Link className={ styles.cart } to="/cart"><p>{ count }</p></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
