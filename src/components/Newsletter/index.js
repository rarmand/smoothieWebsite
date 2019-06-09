import React from "react";
import Net from "../../components/icons/Net";
import "./styles.sass";

class Newsletter extends React.Component {
  state = {
    email: ""
  };

  onInputChange = event => {
    this.setState({ email: event.target.value });
  };

  onButtonClick = () => {
    alert("Your email " + this.state.email + " is saved.");
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="newsletterContent">
        <Net color="#FF7956" className="netIconNewsletter" />
        <div className="newsletterText">
          <span>
            Stay tuned with our promotions, healthy advice and new products!
          </span>
          <input
            placeholder="Email"
            type="text"
            value={this.state.value}
            onChange={this.onInputChange}
          />
          <button type="button" onClick={this.onButtonClick}>
            Subscribe to newsletter
          </button>
          <span>You can resign in any time.</span>
        </div>
      </div>
    );
  }
}

export default Newsletter;
