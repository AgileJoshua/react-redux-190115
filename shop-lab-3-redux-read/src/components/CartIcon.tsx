import React from 'react'
import * as types from '../api/types'

type Props = {items:types.ProductItem[]}

class CartInfo extends React.Component<Props> {
    render() {
        const cartText = this.props.items.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
        return (
            <div title={cartText} className='component'>
                Cart contains: {(this.props.items && this.props.items.length) || 0} items
            </div>
        );
    }
}

export default CartInfo;