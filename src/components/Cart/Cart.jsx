import "./Cart.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";

const Cart = ({cart}) => {
  return (
    <div className="cart__optionCart">
      <ShoppingCartIcon />
      <span className="cart__optionLineTwo cartCount">{cart.length}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.items
})

export default connect(mapStateToProps)(Cart);
