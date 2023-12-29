import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider";
import data from "./data/data.json";
import Offers from "./components/Offers";
import Header from "./components/Header";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import NavOptions from "./components/NavOptions";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitness={data.fitness}
        home={data.home}
        radio={data.radio}
        accessories={data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Header text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Header text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              smartDevices={data.hotAccessories.smartDevices}
              smartDevicesCover={data.hotAccessoriesCover.smartDevices}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifestyle}
              lifestyleCover={data.hotAccessoriesCover.lifestyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Header text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Header text="VIDEOS" />
      <Videos videos={data.videos} />
      <Header text="IN THE PRESS" />
      <Banner end={data.banner.end} />
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
