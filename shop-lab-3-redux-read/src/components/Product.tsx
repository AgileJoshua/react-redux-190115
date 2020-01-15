import React, { Component } from 'react';
import * as types from '../api/types'
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store";
import { addProduct } from '../store/shoppingcart/actions';

type Props = OwnProps & PropsFromRedux

type OwnProps = {
    product: types.ProductItem,
    onClick?: (product: types.ProductItem) => void
}

type PropsFromRedux = ConnectedProps<typeof connector>

class Product extends Component<Props> {
    onClick = () => {
        this.props.addProductToCart(this.props.product);
    }
    render() {
        return (<div className={this.props.product.category && this.props.product.category.reduce((acc, item) => `${acc} ${item.name}`, 'component')}>
            <div>{this.props.product.name}</div>
            <div>${this.props.product.price}</div>
            <div onClick={this.onClick}>BUY!!!</div>
        </div>);
    }
}

const mapState = (state: AppState, ownprops: OwnProps) => ({
    reduxstate: state.cart.totalCost + ownprops.product.price
})

const mapDispatch = {
    addProductToCart: (product: types.ProductItem) => addProduct(product)
}

const connector = connect(
    mapState,
    mapDispatch
)

export default connector(Product);