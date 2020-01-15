import * as React from 'react';
import Menu from './Menu'
import * as Shop from '../api/types'
import { FilterState, FILTER_BY_CATEGORY, FilterActionTypes } from '../store/filter/types';
import {connect, ConnectedProps} from 'react-redux'
import { type } from 'os';
import { AppState } from '../store';

type Props = FilteredMenuProps & PropsFromRedux

export interface FilteredMenuProps {
    items: Shop.MenuItem[],
    onClick: (filterName: string) => void,
    title: string,
    isLoading: boolean
}
 
 
class FilteredMenu extends React.Component<Props> {
    onClick = (name:string)=>{
        this.props.onClick(name);
        //send action
        this.props.setFilter(name);
    }
    render() { 
        return ( <Menu {...this.props} onClick={this.onClick} filter={this.props.filterName} ></Menu> );
    }
}
 
 type PropsFromRedux = ConnectedProps<typeof connector>

 const MapState = (state:AppState)=>({
     filterName:`ReduxFilter: ${state.filter.categoryName}`
 })

 const MapDispatch = {
     setFilter:(name:string):FilterActionTypes=>(
         {type:FILTER_BY_CATEGORY ,categoryName:name}
         )
 }

const connector= connect(MapState, MapDispatch)

export default connector(FilteredMenu);