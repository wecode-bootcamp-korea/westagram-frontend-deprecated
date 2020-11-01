const enterEvent = document.querySelector('#input_comment');
const clickEvent = document.querySelector('gaesi_btn');
const comment_container = document.querySelector('.comment_container');

let now = new Date();

const show_profile_container = document.querySelector('.show_profile_container');
const man_icon = document.querySelector('.man_icon');
man_icon.addEventListener('click', () => {
    show_profile_container.classList.toggle("test")
})

const input_search = document.querySelector('.input_search');

const user = [
    {id:1, name:'wecode_bootcamp', description:'>wecode | 위코드'},
    {id:2, name:'wecode_founder', description:'송은우 (Eun Woo Song)'},
    {id:3, name:'wecode_korea', description:''},
    {id:4, name:'Wecode', description:'강남구 테헤란로 427,서울'}
]

const array = [];

search_context = document.querySelector('.search_context');

for (i in user) {
    array.push(user[i].name);
}

input_search.addEventListener('keyup', (e) => {
    if(input_search.value) {
        if(user[3].name.toLowerCase() === input_search.value) {
            search_context.style.display = 'inline-block';
            for(let i = 0; i <= array.length -1; i++ ) {
                let input_context_list = document.createElement('div');
                input_context_list.innerHTML = `${array[i]}`;
                search_context.append(input_context_list);
            }
        }
    } else {
        search_context.style.display = 'none';
    }
})


function post_comment() {
    let newcomments = document.createElement('newcomments');
    const comment = document.querySelector('.article_comments_1');
    if (newcomments.innerHTML === '') {
        newcomments.innerHTML = `<p>b1ng9u<span>${enterEvent.value}</span><more>더 보기</more></p>
        <div class="heart_container">
          <img class="empty_heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
          <img class="filled_heart" src="img/filled_heart.png">
        </div>`;
        comment_container.append(newcomments);
        enterEvent.value = '';
    } else if(newcomments.innerHTML !== '') {
        newcomments.innerHTML = `<p>b1ng9u<span>${enterEvent.value}</span><more>더 보기</more></p>
        <div class="heart_container">
          <img class="empty_heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
          <img class="filled_heart" src="img/filled_heart.png">
        </div>`;
        comment_container.append(p);
        enterEvent.value = '';
    }
}

const comment = document.querySelector('.article_comments_1');
const deleteEvent = document.querySelector('delete');

deleteEvent.addEventListener('click', () => {
    comment.remove();
})

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

const empty_heart = document.querySelector('.empty_heart');
const filled_heart = document.querySelector('.filled_heart');

empty_heart.addEventListener('click', () => {
    filled_heart.style.display = 'inline-block';
})

filled_heart.addEventListener('click', () => {
    filled_heart.style.display = 'none';
})