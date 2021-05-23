export default {
  DOM: {
    commentLists: document.querySelector(".feeds-comment-lists"),
    commentDeleteButtons: document.querySelectorAll(".feeds-comment-delete"),
    commentInput: document.querySelector(".feeds-comment-form input"),
    commentUploadForm: document.querySelector(".feeds-comment-form"),
    commentUploadButton: document.querySelector(".feeds-comment-upload"),
    commentLikedButtons: document.querySelectorAll(".feeds-comment-heart"),
  },

  initialSetup() {
    this.bindEventOnDeleteButton();
    this.bindEventOnLikedButton();
    this.bindEventOnCommentInput();
    this.bindEventOnUploadForm();
  },

  bindEventOnLikedButton() {
    this.DOM.commentLikedButtons.forEach((likedButton) =>
      likedButton.addEventListener("click", (e) => {
        if (likedButton !== e.target.parentNode) return;
        this.handleClickLikedButton(e);
      })
    );
  },

  bindEventOnDeleteButton() {
    this.DOM.commentDeleteButtons.forEach((deleteButton) =>
      deleteButton.addEventListener("click", (e) => {
        if (deleteButton !== e.target.parentNode) return;
        this.handleClickDeleteButton(e);
      })
    );
  },

  bindEventOnCommentInput() {
    this.DOM.commentInput.addEventListener("keyup", (e) => {
      this.handleKeyupCommentInput(e);
    });
  },

  bindEventOnUploadForm() {
    this.DOM.commentUploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!this.DOM.commentInput.value) {
        alert("댓글 내용을 적어주세요");
        throw "댓글 내용을 적어주세요";
      }
      this.handleSubmitUploadForm();
    });
  },

  handleClickLikedButton(e) {
    this.emit(
      e.target.parentNode,
      "@click",
      e.target.parentNode.dataset.contents
    );
  },

  handleSubmitUploadForm() {
    this.emit(
      this.DOM.commentUploadForm,
      "@submit",
      this.DOM.commentInput.value
    );
    this.DOM.commentInput.value = "";
    this.DOM.commentInput.focus();
  },

  handleKeyupCommentInput(e) {
    this.activateUploadButton(e.target.value);
  },

  handleClickDeleteButton(e) {
    this.emit(
      e.target.parentNode,
      "@click",
      e.target.parentNode.dataset.contents
    );
  },

  activateUploadButton(inputValue = "") {
    inputValue.length
      ? (this.DOM.commentUploadButton.style.color = "dodgerBlue")
      : (this.DOM.commentUploadButton.style.color = "#c5e0fe");
  },

  renderComments(comments = []) {
    this.DOM.commentLists.innerHTML = createCommentTemplate(comments);
  },
};

const createCommentTemplate = (comments = []) => {
  return comments
    .map((comment) => {
      if (comment.isLiked) {
        return `
            <li>
            <div>
              <span class="feeds-comment-name">${comment.name}</span>
              <span>${comment.contents}</span>
              <button class="feeds-comment-delete" data-contents="${comment.contents}">
                <span>X</span>
              </button>
              <button class="feeds-comment-heart" data-contents="${comment.contents}">
                <i class="far fa-heart fa-sm" style="color:tomato"></i>
              </button>  
            </div>
            <div>
              <span class="feeds-comment-time">${comment.creationTime}</span>
            </div>
          </li>
            `;
      }
      return `
            <li>
              <div>
                <span class="feeds-comment-name">${comment.name}</span>
                <span>${comment.contents}</span>
                <button class="feeds-comment-delete" data-contents="${comment.contents}">
                  <span>X</span>
                </button>
                <button class="feeds-comment-heart" data-contents="${comment.contents}">
                  <i class="far fa-heart fa-sm"></i>
                </button>  
              </div>
              <div>
                <span class="feeds-comment-time">${comment.creationTime}</span>
              </div>
            </li>`;
    })
    .join("");
};
