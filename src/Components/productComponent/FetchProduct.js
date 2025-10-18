import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DisplayProducts from './DisplayProduct';

export default function FetchProducts() {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const categoryQuery = searchParams.get('category') || '';

  async function fetchAllProducts() {
    try {
      let response = await fetch("https://dummyjson.com/products?limit=100", { method: "get" });
      let productObject = await response.json();
      setProducts(productObject.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    if (products) {
      let filtered = products;
      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
      if (categoryQuery) {
        filtered = filtered.filter(product =>
          product.category.toLowerCase() === categoryQuery.toLowerCase()
        );
      }
      setFilteredProducts(filtered);
    }
  }, [products, searchQuery, categoryQuery]);

  return (
    <div>
      <DisplayProducts productsArray={filteredProducts || products} />
    </div>
  );
}
