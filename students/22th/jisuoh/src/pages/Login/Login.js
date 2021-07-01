import React from "react";
import Loginbox from "./Loginbox/Loginbox";
import Signup from "./Signup/Signup";
import Downloadbox from "./Downloadbox/Downloadbox";
import Footer from "./Footer/Footer";
import "../Login/Login.scss";

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push("./main");
  };

  render() {
    return (
      <div className="westagram-wrapper">
        <main className="weatagram__main">
          <article className="banner">
            <img alt="iPhone" src="images/iphone.png" />
          </article>
          <article className="sign-and-login">
            <Loginbox goToMain={this.goToMain} />
            <Signup />
            <Downloadbox />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Login;
