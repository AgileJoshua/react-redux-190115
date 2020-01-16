import React, { useContext } from 'react';
import { CartContext } from '../context/shoppingcart/cartContext';

const CartReset: React.FC = () => {
    const cart = useContext(CartContext)

    return (
        <div onClick={cart.emptyCart}>Empty Cart! ({cart.items.length})</div>
    )
}

export default CartReset;