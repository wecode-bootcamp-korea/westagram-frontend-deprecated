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

const like_num_span = document.querySelector('.like').children[0];
let likeNum = 1000;

like_num_span.innerHTML = `좋아요 ${numAddComma(likeNum)}개`;

const reply_text = document.querySelector('.reply-text');

// 숫자에 comma 붙이기
function numAddComma(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

 // 댓글 li 만들기
function addReply(reply){
    const li = document.createElement('li');
    const span_id = document.createElement('span');
    const span_reply = document.createElement('span');
    const span_heartIcon = document.createElement('span');

    span_id.classList.add('insta-id');
    span_id.innerHTML = reply.id;
    span_id.style.marginRight = '5px';

    li.appendChild(span_id);

    span_reply.innerHTML = reply.text;

    li.appendChild(span_reply);

    span_heartIcon.innerHTML = '';
    const img = document.createElement('img');
    img.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    img.addEventListener('click', (e) => {
        e.preventDefault();
    
        e.target.src = e.target.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" ? "./img/red_heart.png" : "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    });
    
    span_heartIcon.appendChild(img);

    li.appendChild(span_heartIcon);

    ul.appendChild(li);
}

// 댓글 갱신되는 부분(2개만 보이게)
function loadReply(ulTag, arrReply){
    while(ulTag.hasChildNodes()){
        ulTag.removeChild(ulTag.firstChild);
    }

    if(arrReply.length < 3){
        arrReply.forEach((reply) => {
            addReply(reply);
        });
    }
    else{
        const len = arrReply.length;

        for(let i = 2; i > 0; i--){
            addReply(arrReply[len - i]);
        }
    }
}

// 댓글 개수 몇개인지 표시
function replyNumRefresh(arrReply){
    const reply_num = document.querySelector('.reply-num');

    reply_num.innerHTML = `댓글 ${arrReply.length}개 보기`;
}

// 추천 친구 팔로우 상태에 따른 text 색
function changeFollowColor(e){
    e.style.color = e.innerHTML === '팔로우' ? 'rgb(0, 149, 246)' : 'black';
}

for(let el of recommend_friend_follow){
    changeFollowColor(el);

    el.addEventListener('click', (e) => {
        e.target.innerHTML = e.target.innerHTML === '팔로우' ? '팔로잉' : '팔로우';
        
        changeFollowColor(e.target);
    })
}

reply_text.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        
        const reply_writer_id = document.querySelector('.right-profile-id').children[0].innerHTML;

        replies.push({id: reply_writer_id, text: reply_text.value});
        reply_text.value = '';
        reply_text.blur();

        loadReply(ul, replies);
        replyNumRefresh(replies);
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

heart.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.src === "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"){
        e.target.src = "./img/red_heart.png";
        likeNum += 1;
        like_num_span.innerHTML = `좋아요 ${numAddComma(likeNum)}개`;
    }
    else{
        e.target.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
        likeNum -= 1;
        like_num_span.innerHTML = `좋아요 ${numAddComma(likeNum)}개`;
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
        
        loadReply(ul, replies);
        replyNumRefresh(replies);
    
        btn_posting.style.color = 'rgb(179, 223, 252)';
        btn_posting.disabled = 'disabled';
    }
});

loadReply(ul, replies);
replyNumRefresh(replies);