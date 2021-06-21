// let commentArr = [];
// let getCommentText = document.getElementsByClassName('comment_box')
// let getCommentButton = document.getElementsByClassName('coment_btn')

const form = document.getElementsByClassName('comment');
const textarea = document.getElementsByClassName('comment_box');
const message = document.getElementsByClassName('text');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = textarea.value;
  message.innerText = location;
})




