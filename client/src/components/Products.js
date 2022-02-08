import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import { popularProducts } from '../data';
import Product from './Product';
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);

  useEffect(()=> {
    const getProducts = async () => {
      try{
        const res = await axios.get( cat 
          ? `http://localhost:5000/api/products?category=${cat}` 
          : "http://localhost:5000/api/products");
       
        setProducts(res.data);

      } catch(err) {

      }
    } 
    getProducts();
  }, [cat]);



  /* Checking if cat and filteredproducts
  
  checking for values in productlist to match our filters.

  */
  useEffect(()=> {
    cat && setFilteredproducts(
      products.filter(item => 
        Object.entries(filters).every(([key, value])=> 
          item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters]);

  useEffect(()=> {
    if((sort="newest")) {
      setFilteredproducts(prev => 
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
        );
    } else if((sort === "asc")){
      setFilteredproducts(prev => 
        [...prev].sort((a,b) => a.price - b.price)
        );
    } else {
      setFilteredproducts(prev => 
        [...prev].sort((a,b) => b.price - a.price)
        );
    }
  }, [sort]);

  return (
    <Container>
      {cat 
      ? filteredproducts.map((item) =>(
        <Product item={item} key={item._id} />
      )) 
      : products.slice(0, 8).map((item) =>(
        <Product item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;