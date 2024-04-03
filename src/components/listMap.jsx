import React from 'react'
import { appear } from './appear';


export const listMap = (productData) => {

    const ListItems = productData.map((product) => <li key ={product.id}>{appear(product)}</li>);
  return (

<ul className='container'>{ListItems}</ul>
  )
}
