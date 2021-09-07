import React, { useEffect, useRef, useState } from "react";

const BackgroundFixedImage = ({ component: Componente, image }) => {
  const [height, setHeight] = useState(500);
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current.getBoundingClientRect().height);
    }, 100);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: `${height}`,
        width: "100vw",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          position: "absolute",
          height: `100%`,
          width: "100%",
          borderImageRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.3,
          zIndex: -20,
        }}
      ></div>
      <Componente />
    </div>
  );
};

export default BackgroundFixedImage;