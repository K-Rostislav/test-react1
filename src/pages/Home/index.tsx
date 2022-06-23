import styles from './Home.module.scss';
import React, { useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';

import { useAppDispatch } from '../../redux/store'

import { useSelector } from 'react-redux';
import { setCategoryId, selectSort, setFilters } from '../../redux/filterSlice/slice';
import { fetchProducts } from '../../redux/productsSlice/slice';

import Card from '../../componsents/Card';
import ContentLoader from '../../componsents/Skeleton';
import Sort from '../../componsents/Sort';
import { RootState } from '../../redux/store';
import { ProductItem } from '../../redux/productsSlice/types';
import { setSearch } from '../../redux/searchSlice/slice';



 const Home: React.FC = React.memo(() => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const search = useSelector((state: RootState) => state.searchSlice.search)
    const { sort, categoryId } = useSelector((state: RootState) => state.filterSlice);
    const { items, status } = useSelector((state: RootState) => state.productsSlice);



    const urlCategory = `${categoryId ? `category=${categoryId}` : ''}`;
    const urlSelect = `${sort ? `&orderBy=price&order=${sort}` : ''}`;
    const urlSearch = `${search ? `&search=${search}` : ''}`;

    const isMounted = React.useRef(false);

    useEffect(() => {
        if(isMounted.current){
            const queryString = qs.stringify({ 
                categoryId,
                sort,
                search,
            });
            navigate(`?${queryString}`);
        }
    }, [categoryId, sort, search])

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            dispatch(setFilters({
                categoryId: params.categoryId, 
                sort: params.sort,
            }));
            dispatch(setSearch(String(params.search)));
            console.log(params)
        }
        isMounted.current = true;
    }, []);

    const fProducts = () => {
        dispatch(
            fetchProducts({
                urlCategory,
                urlSelect,
                urlSearch,
            })
        );
    }
    useEffect(() => {
        fProducts();
    }, [categoryId, sort, search]);


    const loader = [...new Array(4)].map((_, index) => (<ContentLoader key={index}/> ));
    const products = items.map((obj: ProductItem) => (
    <Link to={`/product/${obj.id}`} key={obj.id}>
        <Card 
            id={obj.id}
            name={obj.name}
            price={obj.price}
            img={obj.img}
            category={obj.category}
            count={obj.count}
        />
    </Link>))



    const sortSelect = useCallback((sort: string) => {
        dispatch(selectSort(sort))
    }, []);  
    const idCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id))
    }, []);  

    return (
        <section className={ styles.home }>
            <div className={ styles.container }>
                <Sort sortSelect={sortSelect} categoryId={idCategory}/>

                <div className={ styles.grid }>
                    { 
                        status === 'error' ? (
                            <h1>Ошибка</h1>
                        ) : (
                            <>{status === 'loading' ? loader : products}</>
                        )
                    } 
                </div>
            </div>
        </section>
    );
})


export default Home;
