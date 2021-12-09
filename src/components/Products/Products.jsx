import React, { useEffect } from "react";
import { fetchProducts } from "../../redux/actions/productsAction";
import { connect } from "react-redux";
import { Product } from "..";
import { addToCart } from '../../redux/actions/cartActions';

const Products = ({ fetchProducts, products, cart, addToCart }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)
  return (
    <>
      {products.slice(0, 4).map((product) => (
        <Product
          title={product.title}
          price={product.price}
          img={product.thumbnail}
          key={product.id}
          onAdd={addToCart}
          product={product}
          cart={cart}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
  cart: state.cart.items,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
