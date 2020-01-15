import { createStore, combineReducers, applyMiddleware } from "redux";

import { cartReducer } from './shoppingcart/reducers';
import { logger } from "./logger";

export const rootReducer = combineReducers({
  cart: cartReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );

  return store;
}