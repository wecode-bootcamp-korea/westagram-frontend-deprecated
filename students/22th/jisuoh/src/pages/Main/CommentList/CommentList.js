import React from "react";
import Comment from "../Comment/Comment";

class CommentList extends React.Component {
  render() {
    const { comments, deleteComment, changeHeartImage, imagesPath } =
      this.props;
    if (!comments) {
      return "";
    } else {
      return comments.map((content) => {
        return (
          <Comment
            key={content.id}
            comments={content}
            commentsArr={comments}
            deleteComment={deleteComment}
            changeHeartImage={changeHeartImage}
            imagesPath={imagesPath}
          />
        );
      });
    }
  }
}

export default CommentList;
