import React from "react";
import { Redirect } from "react-router-dom";
import { products } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";

const ProductsScreen = () => {
  if (window.location.pathname !== "/productos") return <Redirect to="/" />;
  return (
    <section className="products animate__animated animate__fadeIn">
      <div className="break-points">
        <CustomCardList data={products} />
      </div>
    </section>
  );
};

export default ProductsScreen;
