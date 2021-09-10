import React from "react";
import { Carousel } from "react-carousel-minimal";
import { Redirect } from "react-router-dom";
import { FadeIn } from "../organisms/Banner";

const GalleryScreen = () => {
  if (window.location.pathname !== "/fotos") return <Redirect to="/" />;
  const data = [
    {
      image:
        "https://images.pexels.com/photos/3738339/pexels-photo-3738339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: `Planchado`,
    },
    {
      image:
        "https://images.unsplash.com/photo-1617391654484-2894196c2cc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Tinte",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583743599150-3b6048ecf084?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Peinado",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581674210501-c760093514e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Peinado de Novia",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541088120351-d566aa6ac53f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Maquillaje",
    },
    {
      image:
        "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      caption: "Corte caballero",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
      caption: "Mascarillas",
    },
    {
      image:
        "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Maquillaje",
    },
    {
      image:
        "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Cosméticos",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <FadeIn from={0.1}>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "0 20px",
            }}
          >
            <Carousel
              data={data}
              time={5000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default GalleryScreen;
