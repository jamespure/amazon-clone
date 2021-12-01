import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <nav className="header__nav">
        <div className="header__options">
          <span className="header__optionLineOne">Hello,</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__options">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
