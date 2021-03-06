import "./Home.css";
import { Product } from "../index";
import Products from "../Products/Products";

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home__img"
          className="home__img"
        />

        <div className="home__row">
          <Products/>
        </div>
      </div>
    </main>
  );
};

export default Home;
