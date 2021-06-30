import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    const { comments, deleteComment } = this.props;
    return (
      <li className="comment">
        <div className="comment__div">
          <span className="nickname">{comments.nickname}</span>
          <p>{comments.comment}</p>
          <button className="more">더 보기</button>
        </div>
        <div className="like-delete">
          <button className="mini-like-btn">
            <img alt="Heart" className="mini-heart" src="images/heart.png" />
          </button>
          <button
            className="delete-btn"
            onClick={() => deleteComment(comments.id)}
          >
            X
          </button>
        </div>
      </li>
    );
  }
}

export default Comment;
