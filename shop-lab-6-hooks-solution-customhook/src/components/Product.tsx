import React, { useContext } from 'react';
import * as types from '../api/types'
import { CartContext } from '../context/shoppingcart/cartContext';

type Props = {
    product: types.ProductItem,
    onClick?: (product: types.ProductItem) => void
}

const Product: React.FC<Props> = (props) => {
    let cart = useContext(CartContext)
    
    return (
        <div className={props.product.category.reduce((acc, item) => `${acc} ${item.name}`, 'component')}>
            <div>{props.product.name}</div>
            <div>${props.product.price}</div>
            <div onClick={() => cart.addProduct(props.product)}>BUY!!!</div>
        </div>
    )
}

export default Product;