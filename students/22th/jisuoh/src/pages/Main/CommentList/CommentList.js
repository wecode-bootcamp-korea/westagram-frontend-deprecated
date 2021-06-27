import React from "react";
import Comment from "../Comment/Comment";

class CommentList extends React.Component {
  render() {
    return this.props.comments.map((content) => {
      return (
        <Comment
          key={content.id}
          comments={content}
          commentsArr={this.props.comments}
          deleteComment={this.props.deleteComment}
        />
      );
    });
  }
}

export default CommentList;
