import React from "react";
import MenuCardItem from "../MenuCardItem/MenuCardItem";

const MenuCard = ({ filteredMenu }) => {
  return (
    <>
      {filteredMenu &&
        filteredMenu.map((menu) => <MenuCardItem key={menu.id} menu={menu} />)}
    </>
  );
};

export default MenuCard;
