// input에 글자를 써서 Post를 누르면 commentsPlus에 input값이 추가
// inputComments , post , commentsPlus

let postBtn = document.querySelector(".post");

// inputComment.addEventListener("keyup", uploadComment);

postBtn.addEventListener("click", (event) => {
    // function uploadComment(e) {
    // if(e.keyCode === 13) { //엔터키누르면
        let inputComment = document.querySelector(".inputComments"); //textbox
        
        let comment = document.querySelector(".commentText"); //댓글박스 요소 가져오기
        let newDiv = document.createElement('div'); //divbox생성
        let newText = document.createTextNode('j-bback'+'  '+inputComment.value);
        let newComment = document.createAttribute('newComments');
        newDiv.setAttributeNode(newComment);
        newDiv.appendChild(newText);
        comment.appendChild(newDiv);

        
        
        // let makeUser = document.createElement('span');
        // let makeMsg = document.createElement('span');
        // let makeBtn = document.createElement('BUTTON');

        // makeDiv.className = "commentDiv";
        // makeUser.className = "commentUser";
        // makeMsg.className = "commentMsg";
        // makeBtn.className = "deleteBtn";


        // makeDiv.appendChild(comment.innerHTML);
        // makeDiv.appendChild(makeUser);
        // makeDiv.appendChild(makeMsg);
        // makeDiv.appendChild(makeBtn);

        // postBtn.addEventListener("click", (event) => {
            
        //     const btn = event.target;
        //     console.log(btn);

        //     const deleteAll = btn.parentNode;

        //     comment.removeChild(deleteAll);
        // })
});


// postBtn.addEventListener('click', function() {
//     commentPlus.innerHTML = name + inputComment.value;
// })