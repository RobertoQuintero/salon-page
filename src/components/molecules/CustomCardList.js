import React from "react";
import CustomCard from "../ui/cards/CustomCard";

const CustomCardList = ({ data, path }) => {
  return (
    <div className="custom-card__container">
      {data.map((item) => (
        <CustomCard key={item.title} {...item} path={path} />
      ))}
    </div>
  );
};

export default CustomCardList;
