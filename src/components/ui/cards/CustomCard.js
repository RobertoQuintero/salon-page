import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomCard = ({ title, subtitle, imgUrl, path }) => {
  const location = useLocation();
  return (
    <div className=" custom-card glass">
      <div className="custom-card__image">
        <div
          className="custom-card__image-src"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
      <div className="custom-card__description">
        <h4 className="custom-card__description-title">{title}</h4>
        <p className="custom-card__description-subtitle">{subtitle}</p>
        {location.pathname === "/" && (
          <Link to={path} className="custom-card__link">
            ver más
          </Link>
        )}
      </div>
    </div>
  );
};

export default memo(CustomCard);
