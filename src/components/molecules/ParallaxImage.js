import React, { useEffect, useState } from "react";

const ParallaxImage = ({ image, component: Component, height }) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="banner" style={{ height: `${height}` }}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      ></div>
      <Component />
    </div>
  );
};

export default ParallaxImage;
