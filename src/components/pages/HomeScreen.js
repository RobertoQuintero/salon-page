import React from "react";
import { data, products } from "../../data/data";
import BackgroundFixedImage from "../molecules/BackgroundFixedImage";
import About from "../organisms/About";
import PopularItems from "../organisms/PopularItems";

const image =
  "https://images.unsplash.com/photo-1591130690907-993056c57965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80";
const HomeScreen = () => {
  return (
    <div>
      <BackgroundFixedImage component={ContentBox} image={image} />
    </div>
  );
};

export default HomeScreen;

const ContentBox = () => {
  return (
    <>
      <About />
      <PopularItems data={data} title="Populares" path="servicios" />
      <PopularItems data={products} title="Productos" path="productos" />
    </>
  );
};
