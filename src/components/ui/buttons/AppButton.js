import React, { memo } from "react";

const AppButton = ({ title, onClick }) => {
  return (
    <a
      onClick={onClick}
      className="app__button glass"
      href="https://wa.me/5217828282579"
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );
};

export default memo(AppButton);
