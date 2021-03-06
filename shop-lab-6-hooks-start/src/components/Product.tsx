import React, { Component } from 'react';
import * as types from '../api/types'
import { CartContext } from '../context/shoppingcart/cartContext';

type Props = {
    product: types.ProductItem,
    onClick?: (product: types.ProductItem) => void
}

class Product extends Component<Props> {

    render() {
        return (
            <CartContext.Consumer>
                {cart => (
                    <div className={this.props.product.category.reduce((acc, item) => `${acc} ${item.name}`, 'component')}>
                        <div>{this.props.product.name}</div>
                        <div>${this.props.product.price}</div>
                        <div onClick={() => cart.addProduct(this.props.product)}>BUY!!!</div>
                    </div>)}
            </CartContext.Consumer>);
    }
}

export default Product;