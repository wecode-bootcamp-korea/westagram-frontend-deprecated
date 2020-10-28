// 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
// createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.

// 1. input창이 빈값일때 '게시'버튼 비활성화, 값이 있을 때 버튼 활성화 
// 2. input창에 문자입력 후 게시버튼 누르면 input값이  
// 아이디가 mention-side div의 p태그로 들어가기


// createElement 사용


const commentInputBtn = document.getElementById('comment-input-btn');
const displayComment = document.getElementById('comment-side');
const commentInputSide = document.getElementById('comment-input-side');


// 1
function checkCommnet (){
    if(commentInputSide.value !==''){
        commentInputBtn.style.color = '#0095f6';
    }else {
        commentInputBtn.style.color = 'rgb(201, 224, 249)';
    }
}


// 2
function inputComment (e){
    // input에 값이 있고 게시버튼을 클릭하거나 엔터를 눌렀을때
    // createElement로 displayComment에 divㅇ요소 객체가 생성되고
    // console.log(e.target);
    // console.log("+_+");
    if((commentInputSide.value !=='' && e.target == commentInputBtn) || (commentInputSide.value !=='' && e.keyCode === 13)) {
        
        const commentGroup = document.getElementById('comment-group')
        const div = document.createElement('div');
        const span = document.createElement('span');
        const commentContent = document.createTextNode(`<b>ryuwisdom</b> ${commentInputSide.value}`);
        commentGroup.appendChild(div);
        div.appendChild(span);
        span.appendChild(commentContent);
        
        console.log("입력");
        
    }
    
}


commentInputSide.addEventListener('keyup', checkCommnet);
commentInputSide.addEventListener('keydown',inputComment);
commentInputBtn.addEventListener('click',inputComment);