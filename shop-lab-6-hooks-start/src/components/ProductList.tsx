import React, { Component } from 'react';
import * as types from '../api/types'
import Product from './Product';
import { CartContext } from '../context/shoppingcart/cartContext';


type Props = {
    products: types.ProductItem[],
    onClick?: (product: types.ProductItem) => void
}

class ProductList extends Component<Props> {
    render() {
        return (
            <CartContext.Consumer>
                {cart => (
                    <div className='component'>
                        {this.props.products.map(p =>
                            <Product product={p} onClick={this.props.onClick}></Product>)}
                    </div>)
                }
            </CartContext.Consumer>)
    }
}
export default ProductList