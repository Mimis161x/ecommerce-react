import React from 'react'

export const appear = (obj) => {
  return (
    <div className='badge'>
    <img className ="prodimg" src='/{obj.image}' />
      <h1>{obj.title} </h1>
      <h2 className="desc_txt"> {obj.description} </h2>
      <h3>{obj.price}</h3>    
      </div>
  )
}
