const button = document.querySelector(".button");
let input = document.querySelector(".comment-input");
let comment = document.querySelector(".comments-box");

button.addEventListener("click", handleinput);

function handleinput() {
    let p = document.createElement("p");
    p.innerHTML = input.value;
    comment.appendChild(p);
}

//enter key = 13

//inputComment.addEventListener('keypress', function(e) {
// if (inputComment.value) {
//     if (e.which === 13) {
//         let newComment = document.createElement('li');
//         newComment.innerHTML = `<div><span class="userAccount">hi_yoojins</span>` + inputComment.value + `</span></div><div><i class="far fa-heart"></i></div>`;
//         commentsContainer.appendChild(newComment);
//         inputComment.value = "";
//     }
// }





//리액트