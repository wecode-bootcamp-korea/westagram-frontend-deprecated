


const cmt_content = document.querySelector('.comment_write');
const txt_bar = document.querySelector('.cnt');
const btn = document.querySelector('.btn_comment');





//user 이름 만들기
function userName(){
    let alpahbet = 'abcdefghijk';
    let makeName = '';
    for(let i=0; i<4; i++){
        let index = Math.floor(Math.random(10) * alpahbet.length);
        makeName += alpahbet[index];
    }
    
    return makeName;
    
}


//댓글 추가 기능
function addComment(comment){

    const name = document.createElement('span');
    const inputValue = document.createElement('div');
    const commentList = document.createElement('div');

    name.innerText = userName();
    inputValue.innerText = comment;

    commentList.append(userName);
    commentList.append(inputValue);
    cmt_content.prepend(commentList);
}

//버튼 클릭 시 
function pressBtn(){
    const currentValue = txt_bar.value;

    if(!currentValue.length){
        alert("댓글을 입력해주세요 !");
    }else{
        addComment(currentValue);
        txt_bar.value = '';
    }
}

btn.addEventListener('click', pressBtn);
