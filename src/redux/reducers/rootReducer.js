import { combineReducers } from 'redux';
import productsReducer from "../reducers/productsReducer";
import cartReducer from "../reducers/cartReducer"
import userReducer from "../reducers/userReducer"

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
})