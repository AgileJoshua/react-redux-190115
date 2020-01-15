import React from 'react'
import * as types from '../api/types'

type Props = {
    cart?: types.ProductItem[]
}

class CartInfo extends React.Component<Props> {
    render() {
        const cartText = this.props.cart?.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
        const totalPrice = this.props.cart?.reduce((total, item)=>total+item.price,0);
        return (
            <div title={cartText} className='component'>
                Cart contains: {(this.props.cart && this.props.cart.length) || 0} items for ${totalPrice}
            </div>
        );
    }
}

export default CartInfo;