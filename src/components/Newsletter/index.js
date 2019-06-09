import React from "react";
import Net from "../../components/icons/Net";
import "./styles.sass";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="newsletterContent">
        <Net color="#FF7956" className="netIconNewsletter" />
        <div className="newsletterText">
          <span>
            Stay tuned with our promotions, healthy advice and new products!
          </span>
          <input placeholder="Email" type="text" />
          <span>You can resign in any time.</span>
        </div>
      </div>
    );
  }
}

export default Newsletter;
