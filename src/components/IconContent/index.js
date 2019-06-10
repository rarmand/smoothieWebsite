import React from "react";
import "./styles.sass";
import Net from "../icons/Net";

function IconContent() {
  return (
    <div className="iconContent">
      <Net color="#FDBA12" className="iconContent__netIconMainLeft" />
      <Net color="#FDBA12" className="iconContent__netIconMainRight" />
    </div>
  );
}

export default IconContent;
