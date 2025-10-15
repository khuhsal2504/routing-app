import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DisplayProductById from './DisplayProductById'

export default function FetchProductById() {
    let { productId } = useParams()
    let [product, setProduct] = useState(null)
    async function fetchProduct() {
        let response = await fetch(`https://dummyjson.com/products/${productId}`, { method: "get" })
        let productObject = await response.json()
        setProduct(productObject)
    }
    useEffect(() => { fetchProduct() })
    return (
        <div>
            {product && <DisplayProductById productObject={product} />}
        </div>
    )
}