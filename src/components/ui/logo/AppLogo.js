import React, { memo } from "react";

const AppLogo = ({ color = "", scale = 1 }) => {
  console.log("memo");
  return (
    <div
      className={`app-logo ${color}`}
      style={{ transform: `scale(${scale})` }}
    >
      <p className="app-logo__subtitle">Estética Unisex</p>
      <p className="app-logo__title">De Adriana</p>
    </div>
  );
};

export default memo(AppLogo);
