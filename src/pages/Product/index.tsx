import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState<{
        price: number;
        name: string;
        img: string;
    }>();

    useEffect(() => {
        axios.get('https://62a09e0ea9866630f8138101.mockapi.io/products/' + id)
        .then(response => {
            setProduct(response.data);
            console.log(response.data)
        });
    }, [])

    if (!product) {
        return(
            <h1>Загрузка...</h1>
        )
    }

    return(
        <section>
            <img src={`${product.img}`} />
            <p>{product.name}</p>
            <p>{product.price} руб.</p>
        </section>
    )
}
export default Product;
