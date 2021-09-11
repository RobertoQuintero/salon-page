import React from "react";
import { Redirect } from "react-router-dom";
import { data } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";

const ServicesScreen = () => {
  if (window.location.pathname !== "/servicios") return <Redirect to="/" />;
  return (
    <section className="services break-points fadeIn">
      <CustomCardList data={data} />
    </section>
  );
};

export default ServicesScreen;
