const commentInput = document.querySelector(".comment-input");
const commentContainer = document.querySelector(".comment-container");
const submitBtn = document.querySelector(".comment-submit");

commentInput.addEventListener("keyup", activeButton);

function activeButton() {
  if(commentInput.value) {
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.3";
  }
};

commentInput.addEventListener("keypress", addComment);

function addComment(e) {
  if(commentInput.value && e.keyCode === 13) {
    const commentAdded = document.createElement("div");
    commentAdded.classList.add("comment-written");
    commentAdded.innerHTML = `<a class="user-id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a><p class="comment-text">${commentInput.value}</p>`

    commentContainer.appendChild(commentAdded);
    
    commentInput.value = "";
  }
};

submitBtn.addEventListener("click", submitComment);

function submitComment() {
  if(commentInput.value) {
    const commentAdded = document.createElement("div");
    commentAdded.classList.add("comment-written");
    commentAdded.innerHTML = `<a class="user-id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a><p class="comment-text">${commentInput.value}</p>`

    commentContainer.appendChild(commentAdded);
    
    commentInput.value = "";
  }
}