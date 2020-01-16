import React, { useState } from 'react';
import { CartContext, CartContextProps } from './cartContext';
import { ProductItem } from '../../api/types';


const CartContextProvider: React.FC = (props: React.PropsWithChildren<any>) => {

    type CartState = { cartItems: ProductItem[] }

    const [cartState, setCartState] = useState<CartState>({ cartItems: [] })

    const addProduct = (product: ProductItem) => {
        setCartState({ cartItems: [...cartState.cartItems, product] })
    }

    const emptyCart = () => { setCartState({ cartItems: [] }) }

    const contextValue: CartContextProps =
    {
        items: cartState.cartItems,
        addProduct,
        emptyCart
    };

    return (
        <CartContext.Provider value={contextValue}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

export const withCartContext = (WrappedComponent: any) => () => {
    return (<CartContextProvider><WrappedComponent /></CartContextProvider>);
}