import React from 'react'
import './Popular.css'
import products from '../../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div class="popular">
        <h2>Popular products in women</h2>
        <hr/>
        <div className="popular-item">
        {
            products.map((item)=> {
                return(
                    <Item name={item.name} id={item.id} image={item.image} oldPrice={item.oldPrice} newPrice={item.newPrice} />
                )
            })
        }

        </div>
      



    </div>
  )
}

export default Popular