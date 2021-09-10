import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BackgroundFixedImage from "../components/molecules/BackgroundFixedImage";
import Banner from "../components/organisms/Banner";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import GalleryScreen from "../components/pages/GalleryScreen";
import HomeScreen from "../components/pages/HomeScreen";
import ProductsScreen from "../components/pages/ProductsScreen";
import ServicesScreen from "../components/pages/ServicesScreen";
const image =
  "https://images.unsplash.com/photo-1591130690907-993056c57965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <BackgroundFixedImage image={image}>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/fotos" component={GalleryScreen} />
            <Route path="/servicios" component={ServicesScreen} />
            <Route path="/productos" component={ProductsScreen} />
            <Redirect to="/" />
          </Switch>
        </BackgroundFixedImage>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
