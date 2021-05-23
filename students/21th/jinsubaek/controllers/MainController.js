import View from "../views/View.js";
import CommentView from "../views/MainPage/CommentView.js";
import CommentModel from "../models/MainPage/CommentModel.js";
import SearchView from "../views/MainPage/SearchView.js";
import SearchModel from "../models/MainPage/SearchModel.js";
import LoginModel from "../models/LoginPage/LoginModel.js";
import ProfileView from "../views/MainPage/ProfileView.js";
import utils from "../utils/utils.js";

export default {
  init() {
    Object.assign(CommentView, View);
    Object.assign(SearchView, View);
    Object.assign(ProfileView, View);
    this.mainPageSetup();
  },

  mainPageSetup() {
    this.renderComment();
    CommentView.initialSetup();
    SearchView.initialSetup();
    ProfileView.initialSetup();
    this.bindEventOnUploadForm();
    this.bindEventOnSearchInput();
    this.bindEventOnResetButton();
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },

  bindEventOnSearchInput() {
    SearchView.DOM.searchInput.addEventListener("@keyup", (e) => {
      this.handleKeyupSearchInput(e.detail);
    });
  },

  bindEventOnResetButton() {
    SearchView.DOM.resetButton.addEventListener(
      "@click",
      this.handleClickResetButton.bind(this)
    );
  },

  bindEventOnUploadForm() {
    CommentView.DOM.commentUploadForm.addEventListener("@submit", (e) => {
      this.handleSubmitUploadForm(e.detail);
    });
  },

  bindEventOnDeleteButton() {
    CommentView.DOM.commentDeleteButtons = document.querySelectorAll(
      ".feeds-comment-delete"
    );
    CommentView.bindEventOnDeleteButton();
    CommentView.DOM.commentDeleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("@click", (e) => {
        if (!deleteButton === e.target) return;
        this.deleteComment(e.detail);
      });
    });
  },

  bindEventOnLikedButton() {
    CommentView.DOM.commentLikedButtons = document.querySelectorAll(
      ".feeds-comment-heart"
    );
    CommentView.bindEventOnLikedButton();
    CommentView.DOM.commentLikedButtons.forEach((likedButton) => {
      likedButton.addEventListener("@click", (e) => {
        if (!likedButton === e.target) return;
        this.likeComment(e.detail);
      });
    });
  },

  handleKeyupSearchInput(id = "") {
    this.renderSearchResult(id);
  },

  handleClickResetButton() {
    this.renderSearchResult();
  },

  handleSubmitUploadForm(contents = "") {
    this.addComment(contents);
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },

  renderSearchResult(id = "") {
    SearchView.renderSearchResult(SearchModel.searchUser(id));
  },

  renderComment() {
    CommentView.renderComments(CommentModel.comments);
  },

  addComment(contents = "") {
    CommentModel.addComment({
      name: LoginModel.myInfo.id,
      contents,
      creationTime: utils.createDate(),
      isLiked: false,
    });
    this.renderComment();
  },

  deleteComment(contents = "") {
    CommentModel.removeComment(contents);
    this.renderComment();
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },

  likeComment(contents = "") {
    CommentModel.likeComment(contents);
    this.renderComment();
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },
};
