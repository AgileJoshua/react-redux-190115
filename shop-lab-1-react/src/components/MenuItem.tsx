import * as React from 'react';
import { Component } from 'react';
import * as Shop from '../api/types'

export interface MenuItemProps {
    item:Shop.MenuItem,
    onClick:(filterName:string)=>void
}
 
class MenuItem extends Component<MenuItemProps> {
    onFilter = ()=>{
        this.props.onClick(this.props.item.name)
    }
    render() { 
    return (<span className='component' onClick={this.onFilter}> {this.props.item.name} |</span>)
    }
}
 
export default MenuItem;