import React from "react";
import "../../styles.sass";
import Logo from "../../components/Logo";
import InfoContent from "../../components/InfoContent";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import TitleContent from "../../components/TitleContent";
import IconContent from "../../components/IconContent";

class Main extends React.Component {
  render() {
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
}
export default Main;
