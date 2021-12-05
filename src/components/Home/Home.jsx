import "./Home.css";
import { Product } from "../index";

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
          <Product
            id="12321341"
            title="Smart Vacuum Flask Stainless Steel Water Bottle 15oz Thermos with LCD Touch Screen tempreture Display with Double Wall Vacuum Insulated Sweatproof Sport Design, Coffee Thermal Carafe"
            price={21.99}
            rating={4}
            img="https://m.media-amazon.com/images/I/61cictybz2L._AC_SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
