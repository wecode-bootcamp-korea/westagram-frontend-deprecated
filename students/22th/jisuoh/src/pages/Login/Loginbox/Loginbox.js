import React from "react";
import "./Loginbox.scss";

class Loginbox extends React.Component {
  state = {
    id: "",
    pw: "",
  };

  checkIdAndPassword = (e) => {
    const { id, pw } = this.state;
    const { goToMain } = this.props;

    e.preventDefault();

    if (!id.includes("@")) {
      alert("@를 포함시켜 주세요!");
    } else if (pw < 5) {
      alert("비밀번호는 5글자 이상이여야 합니다!");
    } else {
      goToMain();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { id, pw } = this.state;
    const { handleChange, checkIdAndPassword } = this;
    return (
      <section className="login-box">
        <section className="logo">
          <h1 className="logo__h1">Westagram</h1>
        </section>
        <form className="login-form">
          <div className="id-box">
            <input
              type="text"
              name="id"
              className="text-id"
              value={id}
              onChange={handleChange}
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="pw-box">
            <input
              type="password"
              name="pw"
              className="pw"
              value={pw}
              onChange={handleChange}
              placeholder="비밀번호"
            />
          </div>
          <div className="btn-box">
            <button
              className="btn-login"
              onClick={checkIdAndPassword}
              disabled={!id || !pw}
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
