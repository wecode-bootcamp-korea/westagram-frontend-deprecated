const comment = document.querySelector('.add_comment');
// input 박스 
const button = document.querySelector('#btn');
// 버튼
const comment_added = document.querySelector('.comment_added');
// 추가하고자 하는 div박스
// const your_feed_text = document.querySelector('.your_feed_text');
const your_feed_text = document.querySelector('.your_feed_text');
// 추가하고자 하는 div의 상위 class

function commentUpdate() {

    const divBox = document.createElement("div");
    const add_user = document.createElement("span");
    const comments = document.createElement("span");
    let myID = "hs_kkom";

    divBox.setAttribute("class", "comment_added");
    add_user.setAttribute("id", "feed_js_id");
    comments.setAttribute("id", "feed_js_text");

    add_user.innerHTML = myID;
    comments.innerHTML = comment.value;

    add_user.innerHTML = myID;
    comments.innerHTML = comment.value;
    // add_user.createTextNode 외않되요?

    your_feed_text.appendChild(divBox);
    divBox.appendChild(add_user);
    divBox.appendChild(comments);

    comment.value = '';
}

button.addEventListener("click", commentUpdate);

// input에다가 텍스트를 입력하고 키코드가 13인 엔터를 누르면 작동되는 이벤트
comment.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        //    if문 내에서 함수 실행 못하나요...? 되네요 !
        // const divBox = document.createElement("div");
        // const add_user = document.createElement("span");
        // const comments = document.createElement("span");
        // let myID = "hs_kkom";

        // divBox.setAttribute("class", "comment_added");
        // add_user.setAttribute("id", "feed_js_id");
        // comments.setAttribute("id", "feed_js_text");

        // add_user.innerHTML = myID;
        // comments.innerHTML = comment.value;

        // add_user.innerHTML = myID;
        // comments.innerHTML = comment.value;
        // // add_user.createTextNode 외않되요?

        // your_feed_text.appendChild(divBox);
        // divBox.appendChild(add_user);
        // divBox.appendChild(comments);

        // comment.value = '';
        return commentUpdate();
    }
});

// 인풋에다가 텍스트 치면 버튼색 변경하기

// comment.addEventListener("keyup", function () {
//     if (comment.value)
//         button.style.backgroundColor = blue;
// } else button.style.backgroundColor = skyblue;

// function activateBtn() {
//     if (comment.value) {
//         button.style.color = '#85C3FB';
//     } else {
//         button.style.color = '#E5F2FE';
//     }
// }

comment.addEventListener("keyup", function () {
    if (comment.value) {
        button.style.color = '#0095F6';
    } else {
        button.style.color = '#E5F2FE';
    }
})


