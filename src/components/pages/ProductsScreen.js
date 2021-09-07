import React from "react";
import { products } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";

const ProductsScreen = () => {
  return (
    <section className="products">
      <div className="break-points">
        <CustomCardList data={products} />
      </div>
    </section>
  );
};

export default ProductsScreen;
