import React from "react";
import Net from "../../components/icons/Net";
import "./styles.sass";

function Newsletter() {
  const [email, setEmail] = React.useState("");

  const onInputChange = event => {
    setEmail(event.target.value);
  };

  const onButtonClick = () => {
    alert("Your email " + email + " is saved.");
    setEmail("");
  };

  return (
    <div className="newsletterContent">
      <Net color="#FF7956" className="newsletterContent__netIcon" />
      <div className="newsletterContent__newsletterText">
        <span className="newsletterText__span">
          Stay tuned with our promotions, healthy advice and new products!
        </span>
        <input
          className="newsletterText__input--text"
          placeholder="Email"
          type="text"
          value={email}
          onChange={onInputChange}
        />
        <button
          className="newsletterText__button--submit"
          type="button"
          onClick={onButtonClick}
        >
          Subscribe to newsletter
        </button>
        <span className="newsletterText__span">
          You can resign in any time.
        </span>
      </div>
    </div>
  );
}

export default Newsletter;
