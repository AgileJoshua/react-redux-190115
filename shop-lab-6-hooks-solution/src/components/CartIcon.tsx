import React, { useContext } from 'react'
import { ProductItem } from '../api/types';
import { CartContext } from '../context/shoppingcart/cartContext';

const CartInfo: React.FC = () => {
    const cart = useContext(CartContext)
    
    const createCartTooltip = (items: ProductItem[]) => {
        return items?.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
    }

    return (
        <div title={createCartTooltip(cart.items)} className='component'>
            Cart contains: {(cart.items && cart.items.length) || 0}
        </div>
    )
}

export default CartInfo;