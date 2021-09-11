import React from "react";
import AppLogo from "../ui/logo/AppLogo";

const dataLinks = [
  {
    icon: "fab fa-whatsapp",
    text: "Whatsapp",
    href: "https://wa.me/5217828282579",
  },
  {
    icon: "fab fa-facebook-f",
    text: "Facebook",
    href: "https://www.facebook.com/adrianamartinez.chachis",
  },
  {
    icon: "fas fa-map-marker-alt",
    text: "Maps",
    href: "http://www.google.com/maps/place/20.53350902273966,-97.43478181371314",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer break-points">
        <div className="footer__links">
          {dataLinks.map((item) => (
            <CustomLink
              icon={item.icon}
              text={item.text}
              href={item.href}
              key={item.href}
            />
          ))}
        </div>
        <div>
          <p className="footer__text">Adriana Martinez</p>
          <p className="footer__text">782 828 2579</p>
          <p className="footer__text">Av 20 Nov esq. Porfirio Díaz</p>
          <p className="footer__text">Col. Tepeyac 93250</p>
          <p className="footer__text">Poza Rica Veracruz</p>
        </div>

        <AppLogo color="color" scale={1.2} />
      </div>
    </footer>
  );
};

export default Footer;

const CustomLink = ({ icon, text, href }) => {
  return (
    <div className="footer__links-item">
      <a
        className="footer__links-item-link"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <i className={`${icon} footer__links-item-icon`}></i>
      </a>
      <p className="footer__links-item-text">{text}</p>
    </div>
  );
};
