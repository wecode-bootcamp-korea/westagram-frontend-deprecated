import React from "react";
import "./Recommend.scss";

class Recommend extends React.Component {
  render() {
    return (
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
                <span className="sentence">legend님 외 2명이 팔로우함</span>
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
                <span className="sentence">youa님 외 5명이 팔로우함</span>
              </div>
            </div>
            <button className="follow-btn">팔로우</button>
          </li>
        </ul>
      </article>
    );
  }
}

export default Recommend;
