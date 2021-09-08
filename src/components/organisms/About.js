import React from "react";

const image1 =
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";

const About = () => {
  return (
    <section className="about__body break-points">
      <h2 className="section__title ">Acerca de</h2>
      <div className="about__content glass">
        <div className="about__content-image">
          <div style={{ backgroundImage: `url(${image1})` }}></div>
        </div>
        <div className="about__text-container">
          <p className="about__paragraph">
            Adriana Martínez, estilista, peinadora y maquillista con años de
            experiencia, ha participado en multiples exposiciones y seminarios
            de belleza, lo que la ha llevado a ser reconocida a nivel local y
            regional por su escelente trabajo.
          </p>
          <p className="about__paragraph">
            Muchisimos clientes, tanto damas como caballeros han quedado
            satisfechos y recomiendan totalmente los servicios que se ofrecen en
            <b> Estética unisex de Adriana</b>.
          </p>
          <p className="about__paragraph">
            ¡Estamos preparados para recibirte!¡No lo pienses más! Si tu deseo
            es realizarte un cambio de look, o talvés quieres lucir
            despampanante para alguna fecha importante o una ocasión especial y
            dejar impresionados a todos, somos tu mejor opción!
          </p>
          <p className="about__paragraph">
            Llamanos sin compromiso y aparta una cita, o visitanos y estaremos
            con gusto de atenderte.
          </p>
          <p className="about__paragraph">Pregunta por nuestras ofertas</p>
          <p className="about__paragraph">Tu amiga Adriana Martínez.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
