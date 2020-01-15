


export const ADD_PRODUCT = 'SHOPPINGCART.ADD_PRODUCT'
export const EMPTY_CART = 'SHOPPINGCART.EMPTY_CART'

interface AddProductAction {
  type: typeof ADD_PRODUCT
  product: CartProduct
}

interface EmptyCartAction {
  type: typeof EMPTY_CART
}

export type CartActionTypes = AddProductAction | EmptyCartAction

export type CartProduct = {
    name:string,
    price: number,
}

export interface CartState{
    items: CartProduct[],
    totalCost: number
}