const enterEvent = document.querySelector('#input_comment');
const clickEvent = document.querySelector('post_comment_btn');
const comment_container = document.querySelector('.comment_container');
let now = new Date();

function post_comment() {
    let newcomments = document.createElement('newcomments');
    const comment = document.querySelector('.article_comments_1');
    if (newcomments.innerHTML === '') {
        newcomments.innerHTML = `<p>b2ng_9<span>${enterEvent.value}</span></p>`;
        comment_container.append(newcomments);
        enterEvent.value = '';
    } else if(newcomments.innerHTML !== '') {
        newcomments.innerHTML = `<p>b2ng_9<span>${enterEvent.value}</span></p>`;
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
