import React, { Component } from 'react';
import * as types from '../api/types'

type Props = {
    product: types.ProductItem,
    onClick?: (product: types.ProductItem) => void
}

class Product extends Component<Props> {
    onClick = () => {
        this.props.onClick && this.props.onClick({...this.props.product});
    }
    render() {
        return (<div className={this.props.product.category.reduce((acc,item)=>`${acc} ${item.name}`,'component')}>
            <div>{this.props.product.name}</div>
            <div>${this.props.product.price}</div>
            <div onClick={this.onClick}>BUY!!!</div>
        </div>);
    }
}

export default Product;