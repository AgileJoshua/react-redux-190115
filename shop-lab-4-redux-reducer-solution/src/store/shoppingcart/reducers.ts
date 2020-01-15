import { CartState, CartActionTypes, ADD_PRODUCT, EMPTY_CART } from "./types";

const initialState: Readonly<CartState> = {
    items: [],
    totalCost: 0
}

export function cartReducer(state = initialState, action: CartActionTypes): CartState {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                items: [...state.items, action.product],
                totalCost: state.totalCost + action.product.price
            };
        case EMPTY_CART:
            return initialState;
        default:
            return state;
    }
}


