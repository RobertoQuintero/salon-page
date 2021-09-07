import React from "react";
import CustomCardList from "../molecules/CustomCardList";

const PopularItems = ({ data, title, path }) => {
  const dataFiltered = data.filter((item, index) => index < 4);
  return (
    <section>
      <div className="popular-items break-points">
        <h2 className="section__title ">{title}</h2>
        <CustomCardList data={dataFiltered} path={path} />
      </div>
    </section>
  );
};

export default PopularItems;
