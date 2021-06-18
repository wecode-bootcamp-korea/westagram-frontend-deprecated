/*comment*/
const commentInput = document.getElementById('commentInput');
const btnComment = document.getElementsByClassName('btn-comment')[0];
const commentList = document.getElementsByClassName('list')[0];
/*heart*/


function addComment(e){
    //console.log('aa');
    const newComment = document.createElement('li');
    newComment.innerHTML = '<span class="id-wrap"><a href = "#" tabindex = "0" class="comment-id">seeeeeeo.un</a ></span ><span> ' + commentInput.value +'<br /></span>';
    
    commentList.appendChild(newComment);
    commentInput.value = '';

    e.preventDefault();//button reload 막아줌
}

btnComment.addEventListener('click',addComment);
btnComment.addEventListener('click',addComment);
btnComment.addEventListener('keyup',function(event){
    if(e.keycode === 13){
        console.log('aa');
        addComment();
    }
});

//1. btnComment 클릭 이벤트 생성'
//2. commentInput 값을 변수로 담아줌
//3. list 클래스에 새로운 li 돔 생성
//4. 새롭게 생성된 li에 innterHTML을 사용해서 html마크업 생성
//5. 생성된 마크업안에 value 값을 담아 ul에 추가

