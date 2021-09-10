import React from "react";
import { Redirect } from "react-router-dom";
import { data } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";
import { FadeIn } from "../organisms/Banner";

const ServicesScreen = () => {
  if (window.location.pathname !== "/servicios") return <Redirect to="/" />;
  return (
    <section className="services break-points">
      <FadeIn from={0.1}>
        <CustomCardList data={data} />
      </FadeIn>
    </section>
  );
};

export default ServicesScreen;
