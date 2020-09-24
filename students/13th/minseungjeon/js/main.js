const dat = document.querySelector('#dat');
const btn = document.querySelector('#btn');

//인풋창에 글을 쓰고 엔터나 게시 누르면 HTML에 p태그에 추가되는거
//function 변수명 중요

function addComment(){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.style.listStyle = 'none';

    ul.appendChild(li);
    const comment = dat.value;
    li.innerHTML = `jeon.92 ${comment}`;
    dat.value = null;

    //댓글 좋아요
    const b = document.createElement('button');
    b.innerHTML = '좋아요';
    li.appendChild(b);

    
    b.addEventListener('click', lComment);
    
    function lComment(){
        if(b.classList.contains('like')){
            b.style.backgroundColor = '#EFEFEF';
            b.classList.remove('like')
        }else{
            b.style.backgroundColor = '#f45516';
            b.classList.add('like')
        }
              
    }
    
    //댓글 삭제
    
    const b2 = document.createElement('button');
    b2.innerHTML = '삭제';
    b2.className = 'delete';
    li.appendChild(b2);

    b2.addEventListener('click', cDelete);

    function cDelete(){
        li.remove();
    }
}

dat.addEventListener('keyup', enter_addComment);

function enter_addComment(e){
    if(e.keyCode === 13 && dat.value.length > 0){
        addComment()
    }
}

function click_addComment(){
    if(dat.value.length > 0){
        addComment()
    }
}

btn.addEventListener('click', click_addComment);


//좋아요 하트 색깔

const isLiked = document.querySelector('#isLiked');

isLiked.addEventListener('click', change);
isLiked.classList.add('red');

function change(){
    //classlist add
    if(isLiked.classList.contains('red')){
        isLiked.src = 'https://raw.githubusercontent.com/wecode-bootcamp-korea/westagram-frontend/master/img/heart.png'
        isLiked.classList.remove('red');
    }else{
        isLiked.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
        isLiked.classList.add('red');
    }
    

}


// NAV 아이디 검색기능
const idArr = ['전민승', '전승민', '강아지', '고양이'];cd



const search = document.querySelector('.search');

search.addEventListener('keyup', s)

function s(){
    const searchContainer = document.querySelector('.search-container');
    if(search.value.length>=1){
        searchContainer.style.display = 'block';
    }else{
        searchContainer.style.display = 'none';
    }
}





