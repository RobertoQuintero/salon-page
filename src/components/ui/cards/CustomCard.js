import React from "react";
import { Link, useLocation } from "react-router-dom";

const CustomCard = ({ title, subtitle, imgUrl }) => {
  const location = useLocation();
  return (
    <div className="custom-card glass">
      <div className="custom-card__image">
        <div
          className="custom-card__image-src"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
      <div className="custom-card__description">
        <h4 className="custom-card__description-title">{title}</h4>
        <p className="custom-card__description-subtitle">{subtitle}</p>
        {location.pathname !== "/servicios" && (
          <Link to="/servicios" className="custom-card__link">
            ver más
          </Link>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
