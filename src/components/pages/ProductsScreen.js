import React from "react";
import { Redirect } from "react-router-dom";
import { products } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";
import { FadeIn } from "../organisms/Banner";

const ProductsScreen = () => {
  if (window.location.pathname !== "/productos") return <Redirect to="/" />;
  return (
    <section className="products break-points ">
      <FadeIn from={0.1}>
        <CustomCardList data={products} />
      </FadeIn>
    </section>
  );
};

export default ProductsScreen;
