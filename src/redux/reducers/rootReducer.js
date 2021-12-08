import { combineReducers } from 'redux';
import productsReducer from "../reducers/productsReducer";
import cartReducer from "../reducers/cartReducer"

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
})