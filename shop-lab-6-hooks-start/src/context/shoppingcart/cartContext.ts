import { createContext } from 'react'
import * as Shop from '../../api/types'

export type CartContextProps = {
  items: Shop.ProductItem[],
  addProduct(product: Shop.ProductItem): void,
  emptyCart(): void
}
const addProduct = (product: Shop.ProductItem) => { }
const emptyCart = () => { }

export const CartContext = createContext<CartContextProps>({
  items: [],
  addProduct,
  emptyCart
})
