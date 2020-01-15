import React, { Component } from 'react';
import * as types from '../api/types'
import Product from './Product';


type Props = { products: types.ProductItem[],
onClick?: (product: types.ProductItem) => void }

class ProductList extends Component<Props> {
    render() {
        return (<div className='component'>{this.props.products.map(p => <Product product={p} onClick={this.props.onClick}></Product>)}</div>);
    }
}
export default ProductList