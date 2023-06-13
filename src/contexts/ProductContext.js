import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import data from '../data/Data';

//create context
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  //product.state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const fetchedData = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...fetchedData]);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setProducts((prevProducts) => [...prevProducts, ...data]);
  }, []);

  

  return <ProductContext.Provider value={{products}}>
    {children}
    </ProductContext.Provider>;
};

export default ProductProvider;
