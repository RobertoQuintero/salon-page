import React from "react";

const image =
  "https://images.unsplash.com/photo-1591130690907-993056c57965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80";
const image1 =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

const About = () => {
  return (
    <section className="about__body break-points">
      <h2 className="section__title ">Acerca de</h2>
      <div className="about__content glass">
        <div className="about__content-image">
          <img src={image1} alt="img-1" />
        </div>
        <p className="about__paragraph">
          Adipisicing veniam enim cupidatat qui magna adipisicing culpa labore
          occaecat adipisicing. Dolor esse excepteur excepteur consequat enim
          sint. Officia aute nulla eu duis eiusmod deserunt ea culpa duis. Id
          cupidatat sunt consectetur eu nulla aute sit eu sint labore et
          reprehenderit. Aliquip labore qui velit duis ullamco id non incididunt
          magna Lorem voluptate. Nisi aliqua et officia dolor sunt.
        </p>
      </div>
    </section>
  );
};

export default About;
