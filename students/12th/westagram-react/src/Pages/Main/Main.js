import React, { Component } from "react";
import "./Main.scss";
import "../../Styles/common.scss";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="all">
        <section className="section">
          <nav className="nav">
            <div className="nav__all">
              <div className="nav__content">
                <div className="nav__logo">
                  <a href="">
                    <img
                      alt="instagramLogo"
                      src="http://localhost:3000/images/main/735145cfe0a4.png"
                    />
                  </a>
                </div>
                <div className="nav__button">
                  <input type="text" />
                  <div>
                    <span>
                      <i className="fas fa-search"> </i>
                    </span>
                    <span>검색</span>
                  </div>
                </div>
                <div className="nav__icon">
                  <a href="">
                    <img
                      alt="homePng"
                      src="http://localhost:3000/images/main/home.png"
                    />
                  </a>
                  <a href="">
                    <img
                      alt="dmPng"
                      src="http://localhost:3000/images/main/dm.png"
                    />
                  </a>
                  <a href="">
                    <img
                      alt="explorePng"
                      src="http://localhost:3000/images/main/explore.png"
                    />
                  </a>
                  <a href="">
                    <img
                      alt="heartPng"
                      src="http://localhost:3000/images/빈하트.png"
                    />
                  </a>
                  <a href="">
                    <img
                      alt="wecodeJpg"
                      src="http://localhost:3000/images/64219646_866712363683753_7365878438877462528_n.jpg"
                    />
                  </a>
                  <section className="ClickBox">
                    <div className="menuBox">
                      <div className="menuBox__section1">
                        <a href="">
                          <div className="section1__profile section1">
                            <div className="profileIcon">
                              <i className="fas fa-user"></i>
                            </div>
                            <div className="profile__Text">프로필</div>
                          </div>
                        </a>
                        <a href="">
                          <div className="section1__bookmark section1">
                            <div className="bookmark__icon">
                              <img
                                alt="bookmarkPng"
                                src="http://localhost:3000/images/main/bookmark.png"
                              />
                            </div>
                            <div className="bookmark__text">저장됨</div>
                          </div>
                        </a>
                        <a href="">
                          <div className="section1__setting section1">
                            <div className="setting__icon">
                              <i className="fas fa-cog"></i>
                            </div>
                            <div className="setting__text">설정</div>
                          </div>
                        </a>
                      </div>
                      <div className="logoutBox">
                        <a href="">
                          <div className="menuBox__logOut">
                            <div className="logOut__text">로그아웃</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </nav>
        </section>

        <main className="main">
          <section className="main__section">
            <div className="feeds__line">
              <div className="feeds">
                <article className="feed">
                  <div className="feed__name">
                    <div className="name__story">
                      <div>
                        <img
                          alt="feedStory"
                          src="http://localhost:3000/images/main/1.jpg"
                        />
                      </div>
                    </div>
                    <div className="name__name__button">
                      <span> canon_mj </span>
                      <button className="name__button__img">
                        <img
                          alt="morePng"
                          src="http://localhost:3000/images/main/more.png"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="feed__imgs">
                    <img
                      alt="feedImg"
                      src="http://localhost:3000/images/space-4888643_1920.jpg"
                      className="feed_img"
                    />
                  </div>
                  <div className="feed__status">
                    <div className="feed__icons">
                      <div className="status__leftIcon">
                        <img
                          alt="mainHeart"
                          src="http://localhost:3000/images/빈하트.png"
                        />
                        <img
                          alt="mainComment"
                          src="http://localhost:3000/images/main/comment.png"
                        />
                        <img
                          alt="mainShare"
                          src="http://localhost:3000/images/main/share.png"
                        />
                      </div>
                      <div className="status__rightIcon">
                        <img
                          alt="mainBookmark"
                          src="http://localhost:3000/images/main/bookmark.png"
                        />
                      </div>
                    </div>
                    <div className="feed__likes">
                      <img
                        alt="likeImg"
                        src="http://localhost:3000/images/main/2.jpg"
                      />
                      <p>
                        <span>aineworld</span>님<span>외 101명</span>이
                        좋아합니다
                      </p>
                    </div>
                    <div className="feed__description">
                      <span>canon_mj</span>우리 귀여운 고양이...
                      <span>더 보기</span>
                    </div>
                    <div className="feed__comments"></div>
                    <div className="feed__minutes"></div>
                  </div>
                  <div className="feed__button">
                    <input type="text" placeholder="댓글 달기..." />
                    <button>게시</button>
                  </div>
                </article>
              </div>
            </div>
            <div className="main__right">
              <div className="profile">
                <div className="profile__img">
                  <div>
                    <img
                      alt="WecodeJpg"
                      src="http://localhost:3000/images/64219646_866712363683753_7365878438877462528_n.jpg"
                    />
                  </div>
                </div>
                <div className="profile__id">
                  <div>Wecode__wecode</div>
                  <div>WeCode | 위코드</div>
                </div>
              </div>
              <div className="stories">
                <div className="story__All">
                  <div>스토리</div>
                  <div>모두 보기</div>
                </div>
                <div className="story">
                  <ul className="story__lists">
                    <li className="story__list">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/2.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div className="story__text">
                        <a href="">_yum_S</a>
                        <div>16분 전</div>
                      </div>
                    </li>
                    <li className="story__list">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/3.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div className="story__text">
                        <a href="">drink_eat_drink</a>
                        <div>3시간 전</div>
                      </div>
                    </li>
                    <li className="story__list">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/5.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div className="story__text">
                        <a href="">hyukc</a>
                        <div>20시간 전</div>
                      </div>
                    </li>
                    <li className="story__list">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/6.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div className="story__text">
                        <a href="">jminkeek</a>
                        <div>2일 전</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="recommends">
                <div className="recommend__all">
                  <div>회원님을 위한 추천</div>
                  <div>모두 보기</div>
                </div>
                <div className="recommend__lists">
                  <ul className="recommend__list">
                    <li className="recommend">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/10.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div>
                        <a> joahye</a>
                        <div>_wit님 외 2명이 ...</div>
                      </div>
                      <div>팔로우</div>
                    </li>
                    <li className="recommend">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/8.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div>
                        <a>jonmad</a>
                        <div>qwooqkfa님 외 1명이 ...</div>
                      </div>
                      <div>팔로우</div>
                    </li>
                    <li className="recommend">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/9.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div>
                        <a> hoyl</a>
                        <div>nmamqa님 외 2명이 ...</div>
                      </div>
                      <div>팔로우</div>
                    </li>
                    <li className="recommend">
                      <a href="">
                        <div>
                          <img
                            alt="storyImg"
                            src="http://localhost:3000/images/main/6.jpg"
                            width="30px"
                            height="30px"
                          />
                        </div>
                      </a>
                      <div>
                        <a> man_woem</a>
                        <div>_legend_a님 외 2명이 ...</div>
                      </div>
                      <div>팔로우</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coperation__info">
                <ul>
                  <li>
                    <a href="">소개</a>
                  </li>
                  <li>
                    <a href="">도움말</a>
                  </li>
                  <li>
                    <a href="">홍보 센터</a>
                  </li>
                  <li>
                    <a href="">API</a>
                  </li>
                  <li>
                    <a href="">채용정보</a>
                  </li>
                  <li>
                    <a href="">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="">약관</a>
                  </li>
                  <li>
                    <a href="">위치</a>
                  </li>
                  <li>
                    <a href="">인기 계정</a>
                  </li>
                  <li>
                    <a href="">해시태그</a>
                  </li>
                  <li>
                    <a href="">언어</a>
                  </li>
                </ul>
              </div>
              <div className="cooperation__information">
                © 2020 INSTAGRAM FROM FACEBOOK
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default Main;
