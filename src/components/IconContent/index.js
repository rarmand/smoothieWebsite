import React from "react";
import "./styles.sass";
import Net from "../icons/Net";

function Logo() {
  return (
    <div className="iconContent">
      <Net color="#FDBA12" className="netIconMainLeft" />
      <div className="netSpace" />
      <Net color="#FDBA12" className="netIconMainRight" />
    </div>
  );
}

export default Logo;
