import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />
                {
                    !cartItems[id]
                        ? <img src={assets.add_icon_white} onClick={() => addToCart(id)} alt="add" className='add' />
                        :
                        <div className='food-item-counter'>
                            <img src={assets.remove_icon_red} alt="remove" onClick={() => removeFromCart(id)} className='food-item-counter-icon' />
                            <p>{cartItems[id]}</p>
                            <img src={assets.add_icon_green} alt="add" onClick={() => addToCart(id)} className='food-item-counter-icon' />
                        </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating stars" />

                </div>
                <p className='food-items-desc'>
                    {description}
                </p>
                <p className='food-item-price'>${price}</p>

            </div>

        </div>
    )
}

export default FoodItem
