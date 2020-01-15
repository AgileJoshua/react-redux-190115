import * as React from 'react';
import {connect, ConnectedProps} from 'react-redux'
import {emptyCart} from '../store/shoppingcart/actions'
import { AppState } from '../store';
type Props = PropsFromRedux;

class CartReset extends React.Component<Props> {
    render() { 
        return (<div onClick={this.props.empty}>Empty Cart! ({this.props.itemCount})</div>  );
    }
}

 type PropsFromRedux = ConnectedProps<typeof connector>


const MapDispatch = {
    empty:emptyCart
}
const MapState = (state:AppState)=>({
    itemCount:state.cart.items.length
})
 
const connector = connect(
    MapState,
    MapDispatch
)

export default connector(CartReset);