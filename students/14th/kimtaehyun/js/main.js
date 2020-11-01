const enterEvent = document.querySelector('#input_comment');
const clickEvent = document.querySelector('gaesi_btn');
const comment_container = document.querySelector('.comment_container');
let now = new Date();

// 각각의 댓글에서 어떻게 하트를 다 줄수 있을까? 무슨 배열이랑 반복문 써야할것 같은데
// for문을 어떻게 적용하나??
// 빈 배열을 만든다음에 쓴 것들이 저 p태그 뭉탱이들이 차례로 들어가고 반복문을 돌린다?
// 클릭하면 array 빈배열에 댓글들이 차례로 들어간다
// 그리고 배열을 반복문을 돌리면서 하나씩 추가

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

// array에 담긴 값들
// ['wecode_bootcamp','wecode_founder','wecode_korea','Wecode'];

input_search.addEventListener('keyup', (e) => {
    // const input_container = document.querySelector('.input_container')

    if(input_search.value) {
        if(user[3].name.toLowerCase() === input_search.value) {
            search_context.style.display = 'inline-block';
            for(let i = 0; i <= 3; i++ ) {
                let input_context_list = document.createElement('div');
                input_context_list.innerHTML = `${array[i]}`;
                search_context.append(input_context_list);
            }
        }
    } else {
        search_context.style.display = 'none';
    }
    
    //     if (e.keyCode === 13) {
    //         for(i in new_array) {
    //             let input_context_list = document.createElement('div');
    //             input_context_list.innerHTML = `${new_array[i]}`;
    //             search_context.append(input_context_list);
    //         }
    //     }

    // 지우지마
    // if(input_search.value) {
    //     search_context.style.display = 'inline-block'; // 무엇이라도 입력되면 일단 창이 열림
    //     const new_array = array.map(name => name.toLowerCase()); 

    //         // if(array.includes('wecode')) {

    //         // }
    //         // array.includes('wecode'): array에 wecode가 포함되었는가? 참거짓 반환
    //         // 포함되어 있으면 그 user의 값들을 표시해줄거다
    //         // name이란 array안의 요소 즉 user.name들
    //         // 근데 includes는 배열에 하는거잖아?

    //         // if(name.indexOf('wecode') != -1) { // wecode가 들어갔는지 안들갔는지 검사한거
    //         // }
    //     // console.log(new_array); map돌면서 다 소문자 리턴값 ['wecode_bootcamp','wecode_founder','wecode_korea','wecode'];
    //         //     // 그다음에 어떻게 해야되?
    //         //     // innerHTML로 안에 내용을 넣고
    //         //     // append로 붙여
    //         //     // 근데 어떻게해
    //     // for(i in new_array) {
    //     //     console.log(new_array[i]);
    //     // }

    //     // 근데 이거는 소문자로 만든 배열을 붙여주는거잔항
    //     // 예전 배열의 값들을 붙여줘야하는데

    //     if (e.keyCode === 13) {
    //         for(i in new_array) {
    //             let input_context_list = document.createElement('div');
    //             input_context_list.innerHTML = `${new_array[i]}`;
    //             search_context.append(input_context_list);
    //         }
    //     }
    // }
})

// 건들면안됨!
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

// 삭제 이벤트
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