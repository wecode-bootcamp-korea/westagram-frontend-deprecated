// let commentArr = [];
// let getCommentText = document.getElementsByClassName('comment_box')
// let getCommentButton = document.getElementsByClassName('coment_btn')

const form = document.getElementsByClassName('comment');
const textarea = document.getElementsByClassName('comment_box');
const message = document.getElementsByClassName('text');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = textarea.value;
  mesage.textContent = location;
})

























// function commentPrint() {
//   let commentValue = document.getElementsByClassName('comment_box').value;
//   document.getElementsByClassName('text').innerText = commentValue;
// }







// const addCommentDOM = (comment) => {
//   const commentEl = document.createElement('li')
//   if (comment.text !== '') {
//     viewCommentsBtn.innerText = `View ${comments.length === 1 ? '' : 'all'} ${comments.length} comment${comments.length === 1 ? '' : 's'}`
//     commentEl.classList.add('comment__content-list')
//     commentEl.innerHTML = ''
//     commentEl.innerHTML = `
//     <div class="comment__content-box">
//       <span class="comment__content"><span class="comment__user user-link">workoutbutlazy</span>${comment.text}</span>
//       <i class="comment__content-delete fas fa-times" onclick="removeComment(${comment.id})"></i>
//     </div>
//     <i class="far fa-heart comment__heart" id="comment-heart"></i>
//     `
//     commentList.appendChild(commentEl)
//   }
// }