import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <li className="comment">
        <div className="comment__div">
          <span className="nickname">{this.props.comments.nickname}</span>
          <p>{this.props.comments.comment}</p>
          <button className="more">{this.props.comments.btn}</button>
        </div>
      </li>
    );
  }
}

export default Comment;
