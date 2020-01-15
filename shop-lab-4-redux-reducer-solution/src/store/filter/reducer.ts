import { FilterActionTypes, FilterState, FILTER_BY_CATEGORY } from "./types";

const initialState:FilterState = {
    categoryName:'All'
}

export function filterActionHandler(state = initialState, action: FilterActionTypes): FilterState {
    console.log(`FilterActionHandler recevied: ${action.type}`)
    switch (action.type) {
        case FILTER_BY_CATEGORY:
            return {
                categoryName: action.categoryName
            }
        default:
            return state
    }
}