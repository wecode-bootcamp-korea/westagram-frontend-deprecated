import React from "react";
import "./Story.scss";
import Storylist from "./Storylist/Storylist";

class Story extends React.Component {
  render() {
    return (
      <article className="aside-in-list">
        <header className="aside__header">
          <span className="title">스토리</span>
          <button className="all-btn">모두 보기</button>
        </header>
        <ul>
          <Storylist />
          <Storylist />
          <Storylist />
        </ul>
      </article>
    );
  }
}

export default Story;
