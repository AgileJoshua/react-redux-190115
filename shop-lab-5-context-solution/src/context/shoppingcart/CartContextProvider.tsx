import * as React from 'react';
import { CartContext, CartContextProps } from './cartContext';
import { ProductItem } from '../../api/types';

export interface State {
    cartItems: ProductItem[],
}

class CartContextProvider extends React.Component<React.PropsWithChildren<any>, State> {
    state = { cartItems: [] }

    addProduct = (product: ProductItem) => {
        this.setState(state => ({ cartItems: [...state.cartItems, product] }))
    }

    emptyCart = () => { this.setState({ cartItems: [] }) }

    render() {
        const { addProduct, emptyCart } = this;
        const contextValue: CartContextProps =
        {
            items: this.state.cartItems,
            addProduct,
            emptyCart
        };
        return (<CartContext.Provider value={contextValue}>
            {this.props.children}
        </CartContext.Provider>);
    }
}

export default CartContextProvider;

export const withCartContext=(WrappedComponent: any) =>()=>{
  return (<CartContextProvider><WrappedComponent /></CartContextProvider>);
}