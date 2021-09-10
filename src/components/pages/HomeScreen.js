import React from "react";
import { data, products } from "../../data/data";
import About from "../organisms/About";
import PopularItems from "../organisms/PopularItems";

const HomeScreen = () => {
  return (
    <>
      <About />
      <PopularItems data={data} title="Populares" />
      <PopularItems data={products} title="Productos" />
    </>
  );
};

export default HomeScreen;
