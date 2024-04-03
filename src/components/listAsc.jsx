import React from 'react'
import { appear } from './appear'

export const listDesc = (productData) => {
productData.sort((a, b) => a.price - b.price);

const ListItems = productData.map((product) => <li key ={product.id}>{appear(product)}</li>);
  return (
    <ul className='container'>{ListItems}</ul>
  )
}
