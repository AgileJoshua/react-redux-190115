import React from 'react'
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../store";

type Props = PropsFromRedux

class CartInfo extends React.Component<Props> {
    render() {
        const cartText = this.props.items?.reduce((tip, item) => tip + `${item.name}: $${item.price}\n`, '');
        return (
            <div title={cartText} className='component'>
                Cart contains: {(this.props.items && this.props.items.length) || 0} items for ${this.props.totalCost}
            </div>
        );
    }
}

type PropsFromRedux = ConnectedProps<typeof connector>

const mapState=(state: AppState)=>({
    items:state.cart.items,
    totalCost:state.cart.totalCost
})

const connector = connect(
    mapState
)

export default connector(CartInfo);