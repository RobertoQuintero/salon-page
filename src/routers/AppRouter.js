import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Banner from "../components/organisms/Banner";
import Navbar from "../components/organisms/Navbar";
import GalleryScreen from "../components/pages/GalleryScreen";
import HomeScreen from "../components/pages/HomeScreen";
import ProductsScreen from "../components/pages/ProductsScreen";
import ServicesScreen from "../components/pages/ServicesScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/fotos" component={GalleryScreen} />
          <Route path="/servicios" component={ServicesScreen} />
          <Route path="/productos" component={ProductsScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
