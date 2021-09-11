import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import ParallaxImage from "../molecules/ParallaxImage";
import AppButton from "../ui/buttons/AppButton";
import BackgroundBanner from "../../assets/banner.jpg";
import BackgroundBannerSmall from "../../assets/pink.jpg";

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
      image={BackgroundBannerSmall}
      component={() => <ContentBox path={location.pathname} />}
      height="50vh"
    />
  );
};

export default Banner;

const ContentBox = memo(({ path }) => {
  return (
    <div className="banner__text-box">
      {path === "/" ? (
        <div className="fadeInLeft">
          <h3 className="banner__subtitle">Estética Unisex</h3>
          <h1 className="banner__title">De Adriana</h1>
          <AppButton title="Contacto" onClick={() => {}} />
        </div>
      ) : (
        <div className="fadeInUp">
          <h2 className="banner__path">{path.substring(1)}</h2>
        </div>
      )}
    </div>
  );
});
