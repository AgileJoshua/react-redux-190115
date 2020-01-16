import React from 'react'
import { ProductItem } from '../api/types';
import { CartContext } from '../context/shoppingcart/cartContext';

class CartInfo extends React.Component {
    createCartTooltip = (items: ProductItem[]) => {
        return items?.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
    }
    render() {
        return (
            <CartContext.Consumer>
                {cart => (
                    <div title={this.createCartTooltip(cart.items)} className='component'>
                        Cart contains: {(cart.items && cart.items.length) || 0}
                    </div>)}
            </CartContext.Consumer>
        );
    }
}

export default CartInfo;