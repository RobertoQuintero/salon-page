import React from "react";
import CustomCardList from "../molecules/CustomCardList";
import AppSubtitle from "../ui/labels/AppSubtitle";

const PopularItems = ({ data, title, path }) => {
  const dataFiltered = data.filter((item, index) => index < 4);
  return (
    <section>
      <div className="popular-items break-points">
        <AppSubtitle title={title} />
        <CustomCardList data={dataFiltered} path={path} />
      </div>
    </section>
  );
};

export default PopularItems;
