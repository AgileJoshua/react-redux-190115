import { CartProduct, CartActionTypes, ADD_PRODUCT, EMPTY_CART } from "./types";


export function addProduct(newProduct: CartProduct): CartActionTypes {
    return {
        type: ADD_PRODUCT,
        product: newProduct
    }
}

export function emptyCart(): CartActionTypes {
    return {
        type: EMPTY_CART
    }
}


