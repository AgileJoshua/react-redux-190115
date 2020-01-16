import * as React from 'react';
import { Component } from 'react';
import * as Shop from '../api/types'
import CartInfo from './CartIcon'
import MenuItem from './MenuItem'

type MenuProps = {
    items: Shop.MenuItem[],
    onClick: (filterName: string) => void,
    title: string,
    isLoading: boolean,
    filter: string
}

export default class Menu extends Component<MenuProps>{
    render() {
        let { items } = this.props;
        items = [...items, { name: 'All' }];
        return <div className='component'>
            <h2>{this.props.title} {this.props.isLoading && 'LOADING!!!'}</h2>
            <div>
                {items.map(item => <MenuItem item={item} onClick={this.props.onClick}></MenuItem>)}
                <CartInfo></CartInfo>
                Products filtered to {this.props.filter}
            </div>
        </div>
    }
}