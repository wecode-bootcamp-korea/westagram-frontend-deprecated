import React from "react";
import "./Downloadbox.scss";

class Downloadbox extends React.Component {
  render() {
    return (
      <section className="download-box">
        <p className="description">앱을 다운로드하세요.</p>
        <div className="badge-box">
          <a href="#!" className="badge">
            <img alt="App Store" src="images/appstore.png" />
          </a>
          <a href="#!" className="badge">
            <img alt="Google Play" src="images/google-play-badge.png" />
          </a>
        </div>
      </section>
    );
  }
}

export default Downloadbox;
