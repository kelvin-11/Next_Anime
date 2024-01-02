import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary text-bold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
