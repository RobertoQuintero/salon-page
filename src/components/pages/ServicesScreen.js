import React from "react";
import { Redirect } from "react-router-dom";
import { data } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";

const ServicesScreen = () => {
  if (window.location.pathname !== "/servicios") return <Redirect to="/" />;
  return (
    <section className="services animate__animated animate__fadeIn">
      <div className="break-points">
        <CustomCardList data={data} />
      </div>
    </section>
  );
};

export default ServicesScreen;
