import React, { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import AppButton from "../ui/buttons/AppButton";

const image1 =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

const image2 =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

const image3 =
  "https://images.unsplash.com/photo-1558470570-c9a5a5ade867?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

const Banner = () => {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="banner">
        <div
          className="image"
          style={{
            backgroundImage: `url(${image2})`,
            transform: `translateY(${offset * 0.5}px)`,
          }}
        ></div>
        <div className="banner__text-box">
          <h3 className="banner__subtitle">Estética Unisex</h3>
          <h1 className="banner__title">De Adriana</h1>
          <AppButton title="Contacto" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Banner;
