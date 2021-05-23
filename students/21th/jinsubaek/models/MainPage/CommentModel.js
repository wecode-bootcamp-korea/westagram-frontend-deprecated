export default {
  comments: [
    {
      name: "neceosecius",
      contents: "거봐 좋았잖아~~~~~🙆‍♀️",
      creationTime: "2021/5/17",
      isLiked: false,
    },
  ],

  addComment(comment = {}) {
    this.comments = [...this.comments, comment];
  },

  removeComment(contents = "") {
    this.comments = this.comments.filter((comment) => {
      return comment.contents !== contents;
    });
  },

  likeComment(contents = "") {
    this.comments.forEach((comment) => {
      if (comment.contents === contents) {
        comment.isLiked = !comment.isLiked;
      }
    });
  },
};
