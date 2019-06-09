import React from "react";
import "../../styles/styles.sass";
import Logo from "../../components/Logo";
import InfoContent from "../../components/InfoContent";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import TitleContent from "../../components/TitleContent";
import IconContent from "../../components/IconContent";

function Main() {
  return (
    <>
      <Logo />

      <main>
        <IconContent />
        <TitleContent />
        <InfoContent />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
export default Main;
