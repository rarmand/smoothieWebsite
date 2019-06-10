import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/cocktail.svg";
import "./styles.sass";

function Logo() {
  return (
    <header className="header">
      <LogoIcon className="header__logo" />
      <h1 className="header__h1">Frutti & Veggie</h1>
    </header>
  );
}

export default Logo;
