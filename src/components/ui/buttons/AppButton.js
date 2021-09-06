import React from "react";

const AppButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="app__button glass">
      {title}
    </button>
  );
};

export default AppButton;
