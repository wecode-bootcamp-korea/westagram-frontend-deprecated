import React, { Component } from "react";
import "./Login.scss";
import "../../Styles/common.scss";
import "../../Styles/reset.scss";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="all">
        <section className="section">
          <main className="main">
            <article className="article">
              <div className="article__imgs">
                <div className="article__img">
                  <img
                    src="http://localhost:3000/Images/842fe5699220.jpg"
                    alt=""
                    className="image__slide"
                  />
                  <img src="" alt="" className="image__slide" />
                  <img
                    src="img/instagramimg/d6bf0c928b5a.jpg"
                    alt=""
                    className="image__slide"
                  />
                  <img
                    src="img/instagramimg/f0c687aa6ec2.jpg"
                    alt=""
                    className="image__slide"
                  />
                </div>
              </div>
              <div className="article__login">
                <div className="login__main">
                  <h1 className="login__instagram"></h1>
                  <div className="login__main__form">
                    <form action="" id="loginform">
                      <input
                        type="text"
                        placeholder="전화번호,사용자 이름 또는 이메일"
                        className="loginform__input__id"
                      />
                      <input
                        type="password"
                        placeholder="비밀번호"
                        className="loginform__input__password"
                      />
                      <Link to="./main">
                        <button className="login__button">
                          <div className="login__button--text">로그인</div>
                        </button>
                      </Link>
                      <div className="login__or">
                        <div className="login__or--line"></div>
                        <div className="login__or--text">또는</div>
                        <div className="login__or--line"></div>
                      </div>
                      <div className="login__facebook">
                        <button className="login__facebook__button">
                          <span className="login__facebooklogo">
                            <i className="fab fa-facebook-square"></i>
                          </span>
                          <span className="login__facebooktext">
                            Facebook으로 로그인
                          </span>
                        </button>
                      </div>
                      <div className="login__errorMessage"></div>
                      <a href="" className="login__forgetpassword">
                        비밀번호를 잊으셨나요?
                      </a>
                    </form>
                  </div>
                </div>
                <div className="login__link">
                  <p>
                    계정이 없으신가요?
                    <a href="">가입하기</a>
                  </p>
                </div>
                <div className="login__appLink" style={{ marginTop: "20px" }}>
                  <p>앱을 다운로드하세요.</p>
                  <div className="login__download">
                    <a href="" className="login__applestore">
                      <img
                        src="img/4a5c9d62d51b.png"
                        alt=""
                        style={{ height: "40px" }}
                      />
                    </a>
                    <a href="" className="login__android">
                      <img
                        src="img/f155b664a93b.png"
                        alt=""
                        style={{ height: "40px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </main>
          <footer className="footer">
            <div className="footer__div">
              <nav className="footer__nav">
                <ul className="footer__ul">
                  <li className="footer__li">
                    <a href="">도움말</a>
                  </li>
                  <li className="footer__li">
                    <a href="">홍보 센터</a>
                  </li>
                  <li className="footer__li">
                    <a href="">API</a>
                  </li>
                  <li className="footer__li">
                    <a href="">채용정보</a>
                  </li>
                  <li className="footer__li">
                    <a href="">개인정보처리방침</a>
                  </li>
                  <li className="footer__li">
                    <a href="">약관</a>
                  </li>
                  <li className="footer__li">
                    <a href="">위치</a>
                  </li>
                  <li className="footer__li">
                    <a href="">인기 계정</a>
                  </li>
                  <li className="footer__li">
                    <a href="">해시태그</a>
                  </li>
                  <li className="footer__li">
                    <a href="">언어</a>
                  </li>
                </ul>
              </nav>
              <span className="footer__copyright">
                © 2020 INSTAGRAM FROM FACEBOOK
              </span>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

export default Login;
