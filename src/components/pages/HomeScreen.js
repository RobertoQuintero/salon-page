import React, { useEffect, useRef, useState } from "react";
import About from "../organisms/About";
import Banner from "../organisms/Banner";

const image =
  "https://images.unsplash.com/photo-1591130690907-993056c57965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80";
const HomeScreen = () => {
  const [height, setHeight] = useState(500);
  const ref = useRef();
  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current.getBoundingClientRect().height);
    }, 2000);
  }, []);
  return (
    <div>
      <Banner />
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
            opacity: 0.2,
            zIndex: -20,
          }}
        ></div>
        <About />
        <About />
        <About />
        <About />
      </div>
    </div>
  );
};

export default HomeScreen;
