const recommend_friend_follow = document.getElementsByClassName('recommend-friend-is-follow');

const icons = document.querySelector('.icons');
const heart = icons.children[0].children[0];

const btn_posting = document.querySelector('.btn-posting');
btn_posting.disabled = 'disabled';

const ul = document.querySelector('.reply-list');
let replies = [{id: 'hemtory', text: '안녕하세요'}];

const search_input = document.querySelector('.search-input');
const search = document.querySelector('.search');
const search_icon_con = search.children[0];
const search_txt = document.querySelector('.search-txt');

const like_num = document.querySelector('.like').children[0];
let likeNum = 1000;

like_num.innerHTML = `좋아요 ${numAddComma(likeNum)}개`;

const reply_text = document.querySelector('.reply-text');

reply_text.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        const reply_writer_id = document.querySelector('.right-profile-id').children[0].innerHTML;

        e.preventDefault();
        replies.push({id: reply_writer_id, text: reply_text.value});
        reply_text.value = '';
        loadReply();
    }
});

reply_text.addEventListener('keyup', (e) => {
    if(e.target.value === ''){
        btn_posting.style.color = 'rgb(179, 223, 252)';
        btn_posting.disabled = 'disabled';
    }
    else{
        btn_posting.style.color = 'rgb(0, 149, 246)';
        btn_posting.disabled = '';
    }
});

search_input.addEventListener('focus', () => {
    search.style.justifyContent = 'flex-start';
    search_input.placeholder = '';
    search_txt.style.zIndex = '-1';
    search_input.value = search_txt.innerHTML;
});

search_input.addEventListener('blur', () => {
    search.style.justifyContent = 'center';
    if(search_input.value === ''){
        search_input.placeholder = '검색';
        search.style.width = '170px';
        search_txt.innerHTML = '';
    }
    else{
        search_txt.innerHTML = search_input.value;
        search_input.value = '';
        search_txt.style.zIndex = '1';
        search.style.width = 'auto';
    }
});

for(let e of recommend_friend_follow){
    changeFollowColor(e);

    e.addEventListener('click', (e) => {
        e.target.innerHTML = e.target.innerHTML === '팔로우' ? '팔로잉' : '팔로우';
        
        changeFollowColor(e.target);
    })
}

// 추천 친구 팔로우 상태에 따른 text 색
function changeFollowColor(e){
    e.style.color = e.innerHTML === '팔로우' ? 'rgb(0, 149, 246)' : 'black';
}

heart.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"){
        e.target.src = "./img/red_heart.png";
        likeNum += 1;
        like_num.innerHTML = `좋아요 ${numAddComma(likeNum)}개`;
    }
    else{
        e.target.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
        likeNum -= 1;
        like_num.innerHTML = `좋아요 ${numAddComma(likeNum)}개`;
    }
});

btn_posting.addEventListener('click', (e) => {
    if(reply_text.value !== ''){
        const reply = {
            id: 'hemtory',
            text: reply_text.value
        };
    
        replies.push(reply);
    
        reply_text.value = '';
        
        loadReply();
        replyNumRefresh();
    
        btn_posting.style.color = 'rgb(179, 223, 252)';
        btn_posting.disabled = 'disabled';
    }
});

// 숫자에 comma 붙이기
function numAddComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

 // 댓글 li 만들기
function addReply(reply){
    const li = document.createElement('li');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');

    span1.classList.add('insta-id');
    span1.innerHTML = reply.id;
    span1.style.marginRight = '5px';

    li.appendChild(span1);

    span2.innerHTML = reply.text;

    li.appendChild(span2);

    span3.innerHTML = '';
    const img = document.createElement('img');
    img.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    img.addEventListener('click', (e) => {
        e.preventDefault();
    
        e.target.src = e.target.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" ? "./img/red_heart.png" : "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    });
    
    span3.appendChild(img);

    li.appendChild(span3);

    ul.appendChild(li);
}

// 댓글 갱신되는 부분(2개만 보이게)
function loadReply(){
    while(ul.hasChildNodes()){
        ul.removeChild(ul.firstChild);
    }

    if(replies.length < 3){
        replies.forEach((reply) => {
            addReply(reply);
        });
    }
    else{
        const len = replies.length;

        for(let i = 2; i > 0; i--){
            addReply(replies[len - i]);
        }
    }
}

// 댓글 개수 몇개인지 표시
function replyNumRefresh(){
    const reply_num = document.querySelector('.reply-num');

    reply_num.innerHTML = `댓글 ${replies.length}개 보기`;
}

loadReply();
replyNumRefresh();