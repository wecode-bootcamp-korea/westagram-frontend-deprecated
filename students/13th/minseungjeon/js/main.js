import {redHeart, whiteHeart} from "./config.js"

const reply = document.querySelector('#reply');
const btn = document.querySelector('#btn');

function addComment() {
    const CommentsBox = document.querySelector('.replyBox ul');
    const oneLineOfComments = document.createElement('li');
    oneLineOfComments.style.listStyle = 'none';

    CommentsBox.appendChild(oneLineOfComments);
    const comment = reply.value;
    oneLineOfComments.innerHTML = `jeon.92 ${comment}`;
    reply.value = null;

    const btn = document.createElement('button');
    btn.className = "likeButton"
    btn.innerHTML = '좋아요';
    oneLineOfComments.appendChild(btn);

    btn.addEventListener('click', commentHandler);

    function commentHandler() {
        if (btn.classList.contains('like')) {
            btn.style.backgroundColor = '#EFEFEF';
            btn.classList.remove('like')
        } else {
            btn.style.backgroundColor = '#f45516';
            btn.classList.add('like')
        }
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '삭제';
    deleteBtn.className = 'delete';
    oneLineOfComments.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteOneLineOfComments);

    function deleteOneLineOfComments() {
        oneLineOfComments.remove();
    }
}

reply.addEventListener('keyup', enter_addComment);

function enter_addComment(e) {
    if (e.keyCode === 13 && reply.value.length > 0) {
        addComment()
    }
}

function click_addComment() {
    if (reply.value.length > 0) {
        addComment()
    }
}

btn.addEventListener('click', click_addComment);

const isLiked = document.querySelector('#isLiked');

isLiked.addEventListener('click', isLikedBtnColor);
isLiked.classList.add('red');



function isLikedBtnColor() {
    if (isLiked.classList.contains('red')) {
        isLiked.src = redHeart
        console.log(redHeart);
        isLiked.classList.remove('red');
    } else {
        isLiked.src = whiteHeart
        console.log(whiteHeart);
        isLiked.classList.add('red');
    }
}

const idArr = ['wecode', 'wecode_전민승', 'wecode_고양이', 'apple', 'taxi'];
const search = document.querySelector('.search');
const idSearchBox = document.querySelector('.search-container ul');

search.addEventListener('keyup', searchingId);

function searchingId(){
    idSearchBox.innerHTML = '';
    const filter = idArr.filter(x => x.indexOf(search.value) !== -1);

    if(search.value.length === 0){
        idSearchBox.style.display = 'none'
    }else{
        idSearchBox.style.display = 'block';
    }
    
    for(let i in filter){
        const oneLineOfLists = document.createElement('li');
        oneLineOfLists.innerHTML = `<img src='https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814082_960_720.png' alt=''/> ${filter[i]}`;
        idSearchBox.appendChild(oneLineOfLists);
    }
}

const profileClick = document.querySelector('.nav-right img:nth-child(5)');
const menuBox = document.querySelector('.menu-box');

profileClick.addEventListener('click', profileMenuBox);

function profileMenuBox() {
    menuBox.style.display = 'block';
    if (menuBox.classList.contains('show')) {
        menuBox.style.display = 'none';
        menuBox.classList.remove('show');
    } else {
        menuBox.style.display = 'block';
        menuBox.classList.add('show');
    }
}
