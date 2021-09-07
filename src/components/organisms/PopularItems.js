import React from "react";
import { data } from "../../data/data";
import CustomCardList from "../molecules/CustomCardList";

const PopularItems = () => {
  const dataFiltered = data.filter((item, index) => index < 4);
  return (
    <section>
      <div className="popular-items break-points">
        <h2 className="section__title ">Populares</h2>
        <CustomCardList data={dataFiltered} />
      </div>
    </section>
  );
};

export default PopularItems;
