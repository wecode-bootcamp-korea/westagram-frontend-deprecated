const enterEvent = document.querySelector('#input_comment');
const clickEvent = document.querySelector('post_comment_btn');
const comment_container = document.querySelector('.comment_container');
let now = new Date();

const empty_heart = document.querySelector('.empty_heart');
const filled_heart = document.querySelector('.filled_heart');

empty_heart.addEventListener('click', () => {
    filled_heart.style.display = 'inline-block';
})

filled_heart.addEventListener('click', () => {
    filled_heart.style.display = 'none';
})

// 각각의 댓글에서 어떻게 하트를 다 줄수 있을까? 무슨 배열이랑 반복문 써야할것 같은데

function post_comment() {
    let newcomments = document.createElement('newcomments');
    const comment = document.querySelector('.article_comments_1');
    if (newcomments.innerHTML === '') {
        newcomments.innerHTML = `<p>b1ng9u<span>위워크에서 진행한 베이킹 클래스...</span><more>더 보기</more></p>
        <div class="heart_container">
          <img class="empty_heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
          <img class="filled_heart" src="img/filled_heart.png">
        </div>`;
        comment_container.append(newcomments);
        enterEvent.value = '';
    } else if(newcomments.innerHTML !== '') {
        newcomments.innerHTML = `<p>b1ng9u<span>위워크에서 진행한 베이킹 클래스...</span><more>더 보기</more></p>
        <div class="heart_container">
          <img class="empty_heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
          <img class="filled_heart" src="img/filled_heart.png">
        </div>`;
        comment_container.append(p);
        enterEvent.value = '';
    }
}

function time_ticking() {
    const time = document.querySelector('time');
    let writeDay = new Date();
    let passedTime = Math.floor(parseInt(now - writeDay) / 1000);
    time.innerHTML = passedTime + "초 전";
    now = new Date();
}

enterEvent.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        post_comment();
        time_ticking();
    }
})

clickEvent.addEventListener('click', () => {
    post_comment();
    time_ticking();
})
