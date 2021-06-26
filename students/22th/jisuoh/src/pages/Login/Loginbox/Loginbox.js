import React from "react";
import "./Loginbox.scss";

class Loginbox extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      pw: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkIdAndPassword = this.checkIdAndPassword.bind(this);
  }

  checkIdAndPassword = (e) => {
    e.preventDefault();
    if (!this.state.id.includes("@")) {
      alert("@를 포함시켜 주세요!");
    } else if (this.state.pw < 5) {
      alert("비밀번호는 5글자 이상이여야 합니다!");
    } else {
      this.props.goToMain();
    }
  };

  handleChange = (e) => {
    e.target.className === "text-id"
      ? this.setState({ id: e.target.value })
      : this.setState({ pw: e.target.value });
  };

  render() {
    return (
      <section className="login-box">
        <section className="logo">
          <h1 className="logo__h1">Westagram</h1>
        </section>
        <form className="login-form">
          <div className="id-box">
            <input
              type="text"
              className="text-id"
              value={this.state.id}
              onChange={this.handleChange}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="pw-box">
            <input
              type="password"
              value={this.state.pw}
              onChange={this.handleChange}
              className="pw"
              placeholder="비밀번호"
            />
          </div>
          <div className="btn-box">
            <button
              className="btn-login"
              onClick={this.checkIdAndPassword}
              disabled={!this.state.id || !this.state.pw}
            >
              로그인
            </button>
          </div>
          <div className="line-or-box">
            <div></div>
            <span>또는</span>
            <div></div>
          </div>
          <button className="facebook-btn">
            <img
              alt="Facebook"
              className="facebook-icon"
              src="images/facebook.png"
            />
            <span className="facebook__span">Facebook으로 로그인</span>
          </button>
        </form>
        <section className="forget-password">
          <a href="https://www.instagram.com/accounts/password/reset/">
            비밀번호를 잊으셨나요?
          </a>
        </section>
      </section>
    );
  }
}

export default Loginbox;
