import React from "react";
import "./styles.sass";

function Info(props) {
  const { img, title, text, reverse } = props;

  return (
    <div className={reverse ? "infoContent reverse" : "infoContent"}>
      <div className={img} />
      <div className="infoText">
        <h3>{title}</h3>
        {text.map(line => {
          return <span key={line.id}>{line.text}</span>;
        })}
      </div>
    </div>
  );
}

export default Info;
