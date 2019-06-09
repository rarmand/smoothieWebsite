import React from "react";
import "./styles.sass";
import Cocktail from "../icons/Cocktail";

function TitleContent() {
  return (
    <div className="titleContent">
      <div className="titleText">
        <span>Healthy food, healthy life!</span>
        <h2>Smoothie Delight</h2>

        <div className="smoothieIcons">
          <Cocktail fillLeft="#FF3501" fillRight="#FF663F" text="Healthy" />
          <Cocktail fillLeft="#5F8B01" fillRight="#74AA00" text="Fresh" />
          <Cocktail fillLeft="#FDBA12" fillRight="#FF9C38" text="Delicious" />
        </div>
      </div>
    </div>
  );
}

export default TitleContent;
