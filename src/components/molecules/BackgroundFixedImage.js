import React, { useEffect, useRef, useState } from "react";

const BackgroundFixedImage = ({ component: Componente, image }) => {
  const [height, setHeight] = useState(500);
  const ref = useRef();
  useEffect(() => {
    setHeight(ref.current.getBoundingClientRect().height);
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
      className="large-pading"
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
