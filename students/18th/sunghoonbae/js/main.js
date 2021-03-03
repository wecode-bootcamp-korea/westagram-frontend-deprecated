// 댓글 추가
const comment_btn = document.querySelector("#comment_btn");
const feeds_container = document.querySelector("#feeds_container");

comment_btn.addEventListener('click', function(e) {
    const comment = document.querySelector("#comment_textarea");
    
    const new_comment_html = `
        <div class='feeds_comment mt-10'>
            <div class='feeds_comment_id'>
                <a href='#' class='mr-10'>asdfasdf</a>
                <span>${comment.value}</span>
            </div>
        </div>
    `;

    feeds_container.innerHTML += new_comment_html;
    //comment.value = '';
});

// 댓글 게시 활성화
const commentTextArea = document.querySelector('#comment_textarea');

commentTextArea.addEventListener('keyup', function(e) {
    commentValue = this.value;
    textAreaColorChange();
});

function textAreaColorChange() {
    return (commentValue.length >= 1 ) ? comment_btn.classList.add('font_color_blue') : comment_btn.classList.remove('font_color_blue');
}

// 엔터 활성화 

commentTextArea.addEventListener('keypress', function(e) {
    if ( e.keyCode === 13) {
        e.preventDefault();
        document.querySelector('#comment_btn').click();
        document.querySelector('#comment_textarea').value = '';
    } 
})


// 하트 색깔 바꾸기 및 좋아요 업 다운
const heartcolor = document.querySelector("#like_color");

heartcolor.addEventListener('click', function(e) {
    heartcolor.classList.toggle('fa-heart-color');
    heartcolor.classList.toggle('far');
    heartcolor.classList.toggle('fas');

    const isContainsFas = heartcolor.classList.contains('fas');
    let like = document.querySelector("#feeds_like");
    let likeNumber = Number(like.innerText);
    
    // if( isContainsFas === true ) {
    //     like.innerText = likeNumber + 1;
    // } else {
    //     like.innerText = likeNumber - 1;
    // }

    like.innerText = isContainsFas ? likeNumber + 1 : likeNumber - 1;

}); 


















