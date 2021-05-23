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
    CommentView.renderComments(CommentModel.comments);
    CommentView.initialSetup();
    SearchView.initialSetup();
    ProfileView.initialSetup();
    this.bindEventOnUploadForm();
    this.bindEventOnSearchInput();
    this.bindEventOnResetButton();
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
    this.bindEventOnProfileImage();
    this.bindEventOnMenuBox();
  },

  bindEventOnProfileImage() {
    ProfileView.DOM.profileImage.addEventListener(
      "@click",
      this.handleClickProfileImage.bind(this)
    );
  },

  bindEventOnMenuBox() {
    document.addEventListener(
      "@click",
      this.handleClickOutsideOfMenuBox.bind(this)
    );
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
        this.handleClickCDeleteButton(e.detail);
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
        this.handleClickLikeButton(e.detail);
      });
    });
  },

  handleClickProfileImage() {
    ProfileView.renderMenuBox();
  },

  handleClickOutsideOfMenuBox() {
    ProfileView.renderMenuBox();
  },

  handleKeyupSearchInput(id = "") {
    SearchView.renderSearchResult(SearchModel.searchUser(id));
  },

  handleClickResetButton() {
    SearchView.renderSearchResult(SearchModel.searchUser());
  },

  handleSubmitUploadForm(contents = "") {
    CommentModel.addComment({
      name: LoginModel.myInfo.id,
      contents,
      creationTime: utils.createDate(),
      isLiked: false,
    });
    CommentView.renderComments(CommentModel.comments);
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },

  handleClickCDeleteButton(contents = "") {
    CommentModel.removeComment(contents);
    CommentView.renderComments(CommentModel.comments);
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },

  handleClickLikeButton(contents = "") {
    CommentModel.likeComment(contents);
    CommentView.renderComments(CommentModel.comments);
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
  },
};
