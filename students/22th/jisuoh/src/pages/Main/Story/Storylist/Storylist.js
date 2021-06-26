import React from "react";
import "./Storylist.scss";

class Storylist extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Storylist;
