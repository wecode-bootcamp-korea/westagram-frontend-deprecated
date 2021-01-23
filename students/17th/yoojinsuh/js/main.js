const inputSubmit = document.querySelector(".inputSubmit");
const inputComment = document.querySelector(".inputComment");
const commentsContainer = document.querySelector(".commentsContainer");

inputComment.addEventListener('keypress', function(e) {
  if (inputComment.value) {
    if (e.which === 13) {
      let newComment = document.createElement('li');
      newComment.innerHTML=  `<span class="userAccount">hi_yoojins</span>` + inputComment.value + `</span>`;
      commentsContainer.appendChild(newComment);
      inputComment.value = "";
    }
  }

})

inputSubmit.addEventListener('click', function() {
  if (inputComment.value) {
    let newComment = document.createElement('li');
    newComment.innerHTML= `<span class="userAccount">hi_yoojins</span>` + inputComment.value + `</span>`;
    commentsContainer.appendChild(newComment);
    inputComment.value = "";
  }
})


function commentUpdate () {
  let commentValue = inputComment.value;

  if (commentValue) {
    inputSubmit.classList.add('darkBtn');
    inputSubmit.disabled = "false";
    inputSubmit.style.cursor = "pointer";
  } else {
    inputSubmit.classList.remove('darkBtn');
    inputSubmit.disabled = "true";
    inputSubmit.style.cursor = "default";
  }

}

inputComment.addEventListener('keyup', commentUpdate)