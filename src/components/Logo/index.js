import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/cocktail.svg";
import "./styles.sass";

function Logo() {
  return (
    <header>
      <LogoIcon className="logo" />
      <h1 className="mainTitle">Frutti & Veggie</h1>
    </header>
  );
}

export default Logo;
