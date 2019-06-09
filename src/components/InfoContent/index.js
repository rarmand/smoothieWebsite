import React from "react";
import Info from "../Info";
import "./styles.sass";

function InfoContent(props) {
  return (
    <>
      <Info
        reverse="true"
        img="infoImg1"
        title="Healthy life"
        text={[
          {
            id: 0,
            text:
              "We are pleased to introduce an exciting line of healthy, delicious smoothies."
          },
          {
            id: 1,
            text:
              "Such a smoothie is a perfect solution for healthy and active living"
          },
          { id: 2, text: "containing 60% of fruits and 40% of vegetables." }
        ]}
      />

      <Info
        img="infoImg2"
        title="Always fresh"
        text={[
          {
            id: 0,
            text: "We take care about our products providing the freshest"
          },
          {
            id: 1,
            text: "and best possible ingredients from local sources."
          },
          {
            id: 2,
            text:
              "Our mission is to give you a fresh full-pack of vitamins and nutriens."
          }
        ]}
      />

      <Info
        reverse="true"
        img="infoImg3"
        title="Good day!"
        text={[
          {
            id: 0,
            text: "Our delicious recipes are a great kick start for your day"
          },
          { id: 1, text: "and literally put a smile on your face." }
        ]}
      />
    </>
  );
}

export default InfoContent;
