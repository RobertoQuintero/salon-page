import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import ParallaxImage from "../molecules/ParallaxImage";
import AppButton from "../ui/buttons/AppButton";
import BackgroundBanner from "../../assets/banner.jpg";

const image =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

const Banner = () => {
  let location = useLocation();

  return location.pathname === "/" ? (
    <ParallaxImage
      image={BackgroundBanner}
      component={() => <ContentBox path={location.pathname} />}
      height="100vh"
    />
  ) : (
    <ParallaxImage
      image={image}
      component={() => <ContentBox path={location.pathname} />}
      height="400px"
    />
  );
};

export default Banner;

const ContentBox = memo(({ path }) => {
  return (
    <div className="banner__text-box">
      {path === "/" ? (
        <>
          <h3 className="banner__subtitle">Estética Unisex</h3>
          <h1 className="banner__title">De Adriana</h1>
          <AppButton title="Contacto" onClick={() => {}} />
        </>
      ) : (
        <div>
          <h2 className="banner__path">{path.substring(1)}</h2>
        </div>
      )}
    </div>
  );
});
