import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Product from '../Product/Product'

const ProductList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div>
      {
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">unitPrice</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

export default ProductList
