import React from 'react'
import './Product.css'
const Product = (props) => {
  const { product } = props
  return (
    <tr className={product.unitPrice > 30 ? 'active' : ''}>
      <th scope="row">{product.id}</th>
      <td colSpan="1">{product.name}</td>
      <td>{product.unitPrice}</td>
    </tr>
  )
}

export default Product
