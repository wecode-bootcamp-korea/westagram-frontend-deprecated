// 댓글 input 창에 엔터치거나 "게시" 누르면 댓글 추가되도록
// createElement로 요소 생성해서, input에 입력한 값이 추가 되어야합니다.

let enterEvent = document.querySelector('#input_comment');
let clickEvent = document.querySelector('post_comment_btn');
let next_comment = document.querySelector('.next_comment');
let now = new Date();

enterEvent.addEventListener('keydown', (e) => {
    // article_comments_2
    let p = document.createElement('newcomments');
    let comment = document.querySelector('.article_comments_1');
    if (e.keyCode === 13) {
        if (p.innerHTML === '') {
            p.innerHTML = `<p>neceousecius<span>${enterEvent.value}</span></p>`;
            next_comment.append(p);
            enterEvent.value = '';
            let time = document.querySelector('time');
            let writeDay = new Date();
            let passedTime = Math.floor(parseInt(now - writeDay) / 1000);
            time.innerHTML = passedTime + "초 전";
        } else if(p.innerHTML !== '') {
            p.innerHTML = `<p>neceousecius<span>${enterEvent.value}</span></p>`;
            next_comment.append(p);
            enterEvent.value = '';
            let time = document.querySelector('time');
            let writeDay = new Date();
            let passedTime = Math.floor(parseInt(now - writeDay) / 1000);
            time.innerHTML = passedTime + "초 전";
        }
    }
})

// neceousecius가 하드코딩되어 있음 고쳐야함
clickEvent.addEventListener('click', () => {
    let p = document.createElement('newcomments');
    let comment = document.querySelector('.article_comments_1');
    if (p.innerHTML === '') {
        p.innerHTML = `
        <p>neceousecius<span>${enterEvent.value}</span></p>`;
        next_comment.append(p);
        enterEvent.value = '';
        let time = document.querySelector('time');
        let writeDay = new Date();
        let passedTime = Math.floor(parseInt(now - writeDay) / 1000);
        time.innerHTML = passedTime + "초 전";
    } else if(p.innerHTML !== '') {
        p.innerHTML = `<p>neceousecius<span>${enterEvent.value}</span></p>`;
        next_comment.append(p);
        enterEvent.value = '';

        let time = document.querySelector('time');
        let writeDay = new Date();
        let passedTime = Math.floor(parseInt(now - writeDay) / 1000);
        time.innerHTML = passedTime + "초 전";
    }

    let time = document.querySelector('time');
    let writeDay = new Date();
    let passedTime = Math.floor(parseInt(now - writeDay) / 1000);
    time.innerHTML = passedTime + "초 전";

})





