import React, { useState, useEffect } from 'react'
import { listMap } from './ListMap';
import { listDesc } from './ListAsc';



export const FetchData = (props) => {
    const func = props.func;

    


        const [products, setProducts] = useState([]);

        useEffect(() => {
            const FetchData = async () => {
                const response = await fetch('https://fakestoreapi.com/products');
                let apiData = await response.json();
                setProducts(apiData);
                console.log(apiData);
            }

            FetchData();


        }, []);

        return (
            func(products)
        )
    
}