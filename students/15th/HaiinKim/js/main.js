//함수 분리하기


const form = document.querySelector('.mainFeedCommentBox')
const input = document.querySelector('.mainFeedCommentBoxInput');
const id = document.querySelector('.mainFeedContent_name');
const ul = document.querySelector('.mainFeedComments');
console.log(ul)
const li = document.createElement('li');
li.classList.add('new_comment');
const span1 = document.createElement('span');
const span2 = document.createElement('span');
span1.className = 'comment_user';
span2.className = 'comment_comm';
// span1.classList.add('comment_user')
// span2.classList.add('comment_comm')
console.log(span1, span2)

//쿼리셀렉터는 기존에 있던 코드를 셀렉해주는거다. 내가 지금만든 태그를 다시 셀렉해줄필요 없다는거!!
//console.log(userSpan, commSpan)

form.addEventListener('submit', newComment)


function newComment (event) {
    event.preventDefault();
    span1.innerText = 'Haiin.k';
    span2.innerHTML = input.value;
    li.append(span1);
    li.append(span2);
    ul.appendChild(li);
    input.value = "";
} 
// function userSpan () {
//     const userNameSpan = document.createElement('span');
//     const list = document.createElement('li');
//     list.setAttribute('class', 'newComment');
//     list.appendChild(userNameSpan);


   
    // if (comment.length >= 1) {
    //     btn.style.color = "rgb(44, 134, 224)"
    // };
