import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="westagram__footer">
        <nav className="meta-link">
          <a href="#!">소개</a>
          <a href="#!">블로그</a>
          <a href="#!">채용 정보</a>
          <a href="#!">도움말</a>
          <a href="#!">API</a>
          <a href="#!">개인정보처리방침</a>
          <a href="#!">약관</a>
          <a href="#!">인기 계정</a>
          <a href="#!">해시태그</a>
          <a href="#!">위치</a>
        </nav>
        <div className="lan-copyright">
          <span className="copyright">&copy; 2021 Westagram from Jisu.Oh</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
