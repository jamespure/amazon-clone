import { connect } from "react-redux";
import "./Products.css";
import { addToCart } from '../../redux/actions/cartActions';

const Product = ({ title, img, price, rating, cart, product, onAdd }) => {

  const handleAddToCart = (item) => {
    onAdd(item)
  }
  
  return (
    <section className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        <p>🌟</p>
      </div>
      <img src={img} alt="product__img" />
      <button
        onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </section>
  );
};

export default Product;
