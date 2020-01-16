import * as React from 'react';

class CartReset extends React.Component {
    render() {
        let cart={
            items:[],
            emptyCart:()=>{}}
        return (
                <div onClick={cart.emptyCart}>Empty Cart! ({cart.items.length})</div>
            )
    }
}

export default CartReset;