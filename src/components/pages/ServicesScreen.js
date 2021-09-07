import React from "react";
import { data } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";

const ServicesScreen = () => {
  return (
    <section className="services">
      <div className="break-points">
        <CustomCardList data={data} />
      </div>
    </section>
  );
};

export default ServicesScreen;
