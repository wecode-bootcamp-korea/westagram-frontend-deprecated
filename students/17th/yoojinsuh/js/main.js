const inputSubmit = document.querySelector(".inputSubmit");
const inputComment = document.querySelector(".inputComment");
const commentsContainer = document.querySelector(".commentsContainer");

inputComment.addEventListener('keypress', function (e) {
  if (inputComment.value) {
    if (e.which === 13) {
      let newComment = document.createElement('li');
      newComment.innerHTML = `<div><span class="userAccount">hi_yoojins</span>` + inputComment.value + `</span></div><div><i class="far fa-heart"></i></div>`;
      commentsContainer.appendChild(newComment);
      inputComment.value = "";
    }
  }

})

inputSubmit.addEventListener('click', function () {
  if (inputComment.value) {
    let newComment = document.createElement('li');
    newComment.innerHTML = `<div><span class="userAccount">hi_yoojins</span>` + inputComment.value + `</span></div><div><i class="far fa-heart"></i></div>`;
    commentsContainer.appendChild(newComment);
    inputComment.value = "";
  }
})


function commentUpdate() {
  let commentValue = inputComment.value;

  if (commentValue) {
    inputSubmit.classList.add('darkBtn');
    inputSubmit.disabled = false;
    inputSubmit.style.cursor = "pointer";
  } else {
    inputSubmit.disabled = true;
    inputSubmit.classList.remove('darkBtn');
    inputSubmit.style.cursor = "default";
  }

}
inputComment.addEventListener('keyup', commentUpdate)


const footerHeart = document.querySelector("#footerHeart");
function fillHeartForFooter() {
  footerHeart.classList.add("filledFooterHeart");
}

const commentHeart = document.querySelector("#commentHeart");
function fillHeartForComment() {
  commentHeart.classList.add("filledCommentHeart");
}