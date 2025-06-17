import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Products = () => {

    const api = "https://dummyjson.com/products";

    const [products, setProducts] = useState([]);

    
    const fetchProduct = async () => {
        const response = await fetch(api);
        const data = await response.json();
        setProducts(data?.products)
        console.log(data?.products)
    };

    useEffect(()=>{
        fetchProduct();
    }, [])
    
  return (
    <>
    
        <h1 className='text-6xl my-4 font-bold text-blue-600 text-center'>Products</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4'>
            {products?.map((item, index)=>{
            return <SingleProduct key={index} {...item}/>
        })}
        
        </div>
        
    </>
  )
}

export default Products