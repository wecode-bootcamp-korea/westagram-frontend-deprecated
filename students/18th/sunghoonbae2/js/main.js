const comment_btn = document.querySelector("#comment_btn");
const feeds_container = document.querySelector("#feeds_container");

comment_btn.addEventListener('click', function() {
    const comment = document.querySelector("#comment_textarea");
    if (comment.value.length < 1) {
        alert("값 넣어라");
        return;
    }
    const new_comment_html = `
        <div class='feeds_comment mt-10'>
            <div class='feeds_comment_id'>
                <a href='#' class='mr-10'>asdfasdf</a>
                <span>${comment.value}</span>
            </div>
        </div>
    `;

    // alert(comment_value); 
    feeds_container.innerHTML += new_comment_html;
    comment.value = '';
});

const heartcolor = document.querySelector("#like_color");


heartcolor.addEventListener('click', function() {
    heartcolor.classList.toggle('fa-heart-color');
    heartcolor.classList.toggle('far');
    heartcolor.classList.toggle('fas');

    const isContainsFas = heartcolor.classList.contains('fas');
    const like = document.querySelector("#feeds_like");
    let likeNumber = Number(like.innerText);
    like.innerText = isContainsFas ? likeNumber += 1 : likeNumber -= 1;
});













