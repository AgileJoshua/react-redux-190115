import * as React from 'react';
import { CartContext } from '../context/shoppingcart/cartContext';

class CartReset extends React.Component {
    render() {
        return (<CartContext.Consumer>
            {cart => (
                <div onClick={cart.emptyCart}>Empty Cart! ({cart.items.length})</div>
            )}
        </CartContext.Consumer>)
    }
}

export default CartReset;