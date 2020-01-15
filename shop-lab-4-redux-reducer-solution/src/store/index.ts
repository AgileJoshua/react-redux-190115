import { createStore, combineReducers, applyMiddleware } from "redux";

import { cartReducer } from './shoppingcart/reducers';
import { logger } from "./logger";
import { filterActionHandler } from "./filter/reducer";

export const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterActionHandler
})

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );

  return store;
}