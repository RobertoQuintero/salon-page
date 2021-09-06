import React from "react";
import { Parallax } from "react-parallax";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
const style = {
  height: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const App = () => {
  return (
    <>
      <Parallax bgImage={image1} strength={100}>
        <div style={style}>
          <div className="glass">
            <h1>Hola Mundo</h1>
          </div>
        </div>
      </Parallax>
      <h1 style={{ textAlign: "center" }}>| | |</h1>
      <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
        <div style={style}>
          <div className="glass">
            <h1>Hola Mundo</h1>
          </div>
        </div>
      </Parallax>
      <h1 style={{ textAlign: "center" }}>| | |</h1>
      <Parallax bgImage={image3} strength={-200}>
        <div style={style}>
          <div className="glass">
            <h1>Hola Mundo</h1>
          </div>
        </div>
      </Parallax>
      <h1 style={{ textAlign: "center" }}>| | |</h1>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={(percent) => (
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",

              backgroundColor: `rgba(255,0,0,${percent / 2})`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%,-50%) scale(${percent / 2})`,
              borderRadius: "100%",
            }}
          ></div>
        )}
      >
        <div style={style}>
          <div className="glass">
            <h1>Hola Mundo</h1>
          </div>
        </div>
      </Parallax>
      <div className="box"></div>
      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default App;
