import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Cart } from "../index.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({user}) => {
  return (
    <header className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <nav className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.displayName}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Cart />
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.items
})

export default connect(mapStateToProps)(Header);
