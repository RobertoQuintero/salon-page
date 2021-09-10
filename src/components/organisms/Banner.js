import React, { memo, useEffect, useState } from "react";
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
        <FadeIn duration={0.5} delay={1000}>
          <h3 className="banner__subtitle">Estética Unisex</h3>
          <h1 className="banner__title">De Adriana</h1>
          <AppButton title="Contacto" onClick={() => {}} />
        </FadeIn>
      ) : (
        <div className="animate__animated animate__fadeInDown">
          <h2 className="banner__path">{path.substring(1)}</h2>
        </div>
      )}
    </div>
  );
});

export const FadeIn = ({ children, duration = 0.3, delay = 1, from = 0 }) => {
  const [percent, setPercent] = useState(from);
  useEffect(() => {
    setTimeout(() => {
      setPercent(1);
    }, delay);
  }, [setPercent, delay]);
  console.log("box");
  return (
    <div
      style={{
        opacity: `${percent}`,
        transition: `opacity ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
};
