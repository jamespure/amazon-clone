import { FETCH_PRODUCTS } from "../actions/types";

export const fetchProducts = () => async (dispatch) => {
  try {
    const getProducts = await fetch("https://dummyjson.com/products");
    const data = await getProducts.json();
    const products = await data.products;
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    });
  } catch (err) {
    console.log(err)
  }
};
