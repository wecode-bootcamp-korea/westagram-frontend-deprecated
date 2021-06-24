import React from "react";
import "../Main/Main.scss";

class Main extends React.Component {
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
                <li className="feed">
                  <header className="feed__header">
                    <div className="profile-box">
                      <div className="profiles">
                        <img alt="Profile" src="images/photo/profile1.jpeg" />
                      </div>
                      <span className="name">silvia.oh.135</span>
                    </div>
                    <span className="menu-icon">
                      <img alt="Menu" src="images/menu.png" className="menu" />
                    </span>
                  </header>
                  <section className="feed__photo">
                    <img alt="Feed" src="images/ice-cream-2934210_1280.jpg" />
                  </section>
                  <div className="comment-wrapper">
                    <section className="feed__like">
                      <section className="like__section">
                        <section className="icons">
                          <button className="icon-btn">
                            <img alt="Heart" src="images/heart.png" />
                          </button>
                          <button className="icon-btn">
                            <img alt="Comment" src="images/speech-bubble.png" />
                          </button>
                          <button className="icon-btn">
                            <img alt="Share" src="images/send.png" />
                          </button>
                        </section>
                        <button className="icon-btn bookmark">
                          <img alt="Bookmark" src="images/bookmark.png" />
                        </button>
                      </section>
                    </section>
                    <section className="profiles-wrapper">
                      <div className="profiles">
                        <img alt="Profile" src="images/photo/profile2.jpeg" />
                      </div>
                      <span>
                        <span className="weight">aineworld</span>님 외{" "}
                        <span className="weight">10명</span>이 좋아합니다
                      </span>
                    </section>
                    <section className="feed__comment">
                      <ul className="comment__ul"></ul>
                      <p className="time">42분 전</p>
                    </section>
                    <section className="comment-input">
                      <form className="comment__form" onsubmit="return false;">
                        <input
                          type="text"
                          className="comment-area"
                          placeholder="댓글 달기..."
                        />
                      </form>
                      <button className="post-btn">게시</button>
                    </section>
                  </div>
                </li>
              </ul>
            </section>
          </main>
          <div className="position">
            <aside className="aside-box">
              <section className="profiles-wrapper">
                <div className="profiles">
                  <img alt="Profile" src="images/photo/profile3.jpeg" />
                </div>
                <div className="profile-info">
                  <span className="nickname">wecode_bootcamp</span>
                  <span className="sentence">WeCode | 위코드</span>
                </div>
              </section>
              <article className="aside-in-list">
                <header className="aside__header">
                  <span className="title">스토리</span>
                  <button className="all-btn">모두 보기</button>
                </header>
                <ul>
                  <li className="aside-list">
                    <div className="profiles-wrapper">
                      <div className="profiles">
                        <img
                          alt="Profile"
                          src="images/photo/profile1.jpeg"
                          className="img-in"
                        />
                      </div>
                      <div className="profile-info">
                        <span className="nickname">_yum_s</span>
                        <span className="sentence">16분 전</span>
                      </div>
                    </div>
                  </li>
                  <li className="aside-list">
                    <div className="profiles-wrapper">
                      <div className="profiles">
                        <img
                          alt="Profile"
                          src="images/photo/profile2.jpeg"
                          className="img-in"
                        />
                      </div>
                      <div className="profile-info">
                        <span className="nickname">drink_eat_drink</span>
                        <span className="sentence">3시간 전</span>
                      </div>
                    </div>
                  </li>
                  <li className="aside-list">
                    <div className="profiles-wrapper">
                      <div className="profiles">
                        <img
                          alt="Profile"
                          src="images/photo/profile3.jpeg"
                          className="img-in"
                        />
                      </div>
                      <div className="profile-info">
                        <span className="nickname">hynkis</span>
                        <span className="sentence">20분 전</span>
                      </div>
                    </div>
                  </li>
                  <li className="aside-list">
                    <div className="profiles-wrapper">
                      <div className="profiles">
                        <img
                          alt="Profile"
                          src="images/photo/profile4.jpeg"
                          className="img-in"
                        />
                      </div>
                      <div className="profile-info">
                        <span className="nickname">jminkim</span>
                        <span className="sentence">2시간 전</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </article>
              <article className="aside-in-list">
                <header className="aside__header">
                  <span className="title">회원님을 위한 추천</span>
                  <button className="all-btn">모두 보기</button>
                </header>
                <ul>
                  <li className="aside-follow-list">
                    <div className="profiles-wrapper">
                      <div className="profiles">
                        <img
                          alt="Profile"
                          src="images/photo/profile1.jpeg"
                          className="img-in"
                        />
                      </div>
                      <div className="profile-info">
                        <span className="nickname">joaaaaneu</span>
                        <span className="sentence">
                          legend님 외 2명이 팔로우함
                        </span>
                      </div>
                    </div>
                    <button className="follow-btn">팔로우</button>
                  </li>
                  <li className="aside-follow-list">
                    <div className="profiles-wrapper">
                      <div className="profiles">
                        <img
                          alt="Profile"
                          src="images/photo/profile2.jpeg"
                          className="img-in"
                        />
                      </div>
                      <div className="profile-info">
                        <span className="nickname">ramp12</span>
                        <span className="sentence">
                          youa님 외 5명이 팔로우함
                        </span>
                      </div>
                    </div>
                    <button className="follow-btn">팔로우</button>
                  </li>
                </ul>
              </article>
              <nav className="etc-link">
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
              </nav>
              <p className="copyright">&copy; 2021 Westagram</p>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
