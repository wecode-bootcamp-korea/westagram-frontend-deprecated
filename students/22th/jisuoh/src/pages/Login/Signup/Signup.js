import React from "react";
import "./Signup.scss";

class Signup extends React.Component {
  render() {
    return (
      <section className="sign-up-box">
        <p className="noaccount">
          계정이 없으신가요?
          <a
            href="https://www.instagram.com/accounts/emailsignup/"
            className="signup-link"
          >
            가입하기
          </a>
        </p>
      </section>
    );
  }
}

export default Signup;
