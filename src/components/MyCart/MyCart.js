import React from 'react';
import './MyCart.css';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider'
import CartProduct from '../CartProduct/CartProduct'
import FlipMove from 'react-flip-move';

function MyCart() {
    const [{ cart }] =  useStateValue();

    return (
      
        <div className="cart">
        <div className="cart__left">
        <a href="https://www.oceanfinance.co.uk/credit-cards/">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        </a>

        <div className='cart__buttom'>
        <p className="cart__title__two">Your Shopping Cart</p>

        <div className="container">
         <center>{!cart.length ? <p className='cart__title'>Your Cart is Empty</p>:<p className='cart__title'>{cart.length} items Present in Your Cart</p>}</center> 
        </div>

        
        <FlipMove >
        {cart.map((item)=>( 
          <CartProduct 
            className="cartProduct"
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
        </FlipMove>
      
        
            
      </div>

        </div>

        <div className="cart__right">
        <Subtotal />
        </div>

        </div>
    )
}

export default MyCart;
