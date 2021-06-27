import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    return (
      <li className="comment">
        <div className="comment__div">
          <span className="nickname">{this.props.comments.nickname}</span>
          <p>{this.props.comments.comment}</p>
          <button className="more">{this.props.comments.btn}</button>
        </div>
        <div className="like-delete">
          <button className="mini-like-btn">
            <img alt="Heart" className="mini-heart" src="images/heart.png" />
          </button>
          <button
            className="delete-btn"
            onClick={() => this.props.deleteComment(this.props.comments.id)}
          >
            X
          </button>
        </div>
      </li>
    );
  }
}

export default Comment;
