
import { Middleware, MiddlewareAPI, Dispatch } from 'redux'
import { AppState } from './index'
import { CartActionTypes } from './shoppingcart/types'

export const logger: Middleware =
    (store: MiddlewareAPI<Dispatch<CartActionTypes>, AppState>) =>
        (next: Dispatch<CartActionTypes>) =>
            (action: CartActionTypes) => {
                console.log('dispatching', action)
                let result = next(action)
                console.log('next state', store.getState())
                return result
            }