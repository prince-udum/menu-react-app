import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <h4 className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </h4>
  );
};

export default Menu;
