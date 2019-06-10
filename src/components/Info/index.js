import React from "react";
import "./styles.sass";

function Info(props) {
  const { img, title, text, reverse } = props;

  return (
    <div className={reverse ? "infoContent infoContentReverse" : "infoContent"}>
      <div className={img} />
      <div className="infoContent__infoText">
        <h3 className="infoText__h3">{title}</h3>
        {text.map(line => {
          return (
            <span className="infoText__span" key={line.id}>
              {line.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Info;
