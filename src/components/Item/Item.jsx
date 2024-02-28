import React from 'react'
import './Item.css'

const Item = ({image, name, oldPrice, newPrice}) => {
  return (
    <div className="item">
        <img src={image} alt=""/>
        <p>{name}</p>
        <div className="price">
            <div className="item-price-old"><p>${oldPrice}</p></div>
            <div className="item-price-new"><p>${newPrice}</p></div>
        </div>

    </div>
  )
}

export default Item