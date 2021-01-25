const button = document.querySelector(".button");
let input = document.querySelector(".comment-input");
let comment = document.querySelector(".comment-plus");

button.addEventListener("click", handleinput);

function handleinput() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("comment-line");
    newDiv.innerHTML = `<p class="comment-text">yeonju</p>` + input.value + '</div>';
    comment.appendChild(newDiv);
    input.value = "";
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


/// input.value = ""; -> input값에 남지 않는 이유 
/// 객체.classList.add(html에서 사용하는 class명)
/// ' 백틱을 사용해야하는 이유? 
///