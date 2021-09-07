import React from "react";
import CustomCard from "../ui/cards/CustomCard";

const CustomCardList = ({ data }) => {
  return (
    <div className="custom-card__container">
      {data.map((item) => (
        <CustomCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default CustomCardList;
