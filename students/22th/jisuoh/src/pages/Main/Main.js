import React from "react";
import "../Main/Main.scss";
import Feed from "./Feed/Feed";
import Story from "./Story/Story";
import Recommend from "./Recommend/Recommend";

class Main extends React.Component {
  state = {
    feeds: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/data/feedData.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    return (
      <div className="main-wrapper">
        <header className="we-header">
          <div className="shrink">
            <div className="header__div">
              <section className="logo-box">
                <div className="icon-box">
                  <img alt="Instagram" src="images/instagram.png" />
                </div>
                <h1>Westagram</h1>
              </section>
              <section className="search-box">
                <input type="text" className="search" placeholder="검색" />
                <img alt="Search" src="images/search.png" className="src" />
              </section>
              <nav className="link-box">
                <a href="#!!" className="explore-link invisible">
                  <img
                    alt="Explore"
                    src="images/explore.png"
                    className="explore"
                  />
                </a>
                <a href="#!!" className="heart-link">
                  <img alt="Heart" src="images/heart.png" className="heart" />
                </a>
                <a href="#!!" className="profile-link invisible">
                  <img
                    alt="Profile"
                    src="images/profile.png"
                    className="profile"
                  />
                </a>
              </nav>
            </div>
          </div>
        </header>
        <div className="we-main-wrapper">
          <main className="we-main">
            <section className="feed-box">
              <ul>
                {this.state.feeds.map((el) => (
                  <Feed feedData={el} key={el.feedId} />
                ))}
              </ul>
            </section>
          </main>
          <div className="position">
            <aside className="aside-box">
              <section className="profiles-wrapper">
                <div className="profiles size">
                  <img alt="Profile" src="images/photo/profile3.jpeg" />
                </div>
                <div className="profile-info">
                  <span className="nickname">wecode_bootcamp</span>
                  <span className="sentence">WeCode | 위코드</span>
                </div>
              </section>
              <Story />
              <Recommend />
              <div className="etc-link">
                <ul className="links">
                  <li className="links-item">
                    <a href="#!">Instagram 정보</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">지원</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">홍보 센터</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">API</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">채용 정보</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">개인정보처리방침</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">약관</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">디렉터리</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">프로필</a>
                  </li>
                  <li className="links-item">
                    <a href="#!">해시 태그</a>
                  </li>
                  <li>
                    <a href="#!">언어</a>
                  </li>
                </ul>
              </div>
              <p className="copyright">&copy; 2021 Westagram</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
