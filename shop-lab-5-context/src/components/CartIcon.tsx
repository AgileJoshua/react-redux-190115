import React from 'react'
import { ProductItem } from '../api/types';

class CartInfo extends React.Component {
    createCartTooltip = (items: ProductItem[]) => {
        return items?.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
    }
    render() {
        let cart = { items: [] as ProductItem[] }
        return (
            <div title={this.createCartTooltip(cart.items)} className='component'>
                Cart contains: {(cart.items && cart.items.length) || 0}
            </div>
        )
    }
}

export default CartInfo;