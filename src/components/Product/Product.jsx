import { useStateValue } from "../../context/StateProvider";
import "./Products.css";

const Product = ({ id, title, img, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_Cart",
      payload: {
        id: id,
        title: title,
        image: img,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToCart}>Add to Cart</button>
    </section>
  );
};

export default Product;
