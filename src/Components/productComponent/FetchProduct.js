import React, { useEffect, useState } from 'react'
import DisplayProducts from './DisplayProduct'
export default function FetchProducts() {
let[products, setProducts]=useState(null)
async function fetchAllProducts()
{
let response=await fetch("https://dummyjson.com/products", {method:"get"})
let productObject=await response.json()
setProducts(productObject.products)
}
useEffect(()=>{fetchAllProducts()},[])
return (
<div>
<DisplayProducts productsArray={products}/>
</div>
)
}