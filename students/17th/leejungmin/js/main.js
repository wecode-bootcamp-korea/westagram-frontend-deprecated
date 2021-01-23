const likeCheck = document.querySelector('.likeit'),
likeCounter = document.querySelector('.peed_option_sub_header_like');

let likeColorChange = 0;


// 게시글 좋아요와 좋아요 갯수 추가

function likeItPlus () {
    if(likeColorChange === 0){
        likeCheck.classList.add("likeit_change");
        document.querySelector('.peed_option_sub_header_like').innerHTML = '좋아요 286개';
        likeColorChange = 1;
    }else if(likeColorChange != 0){
        likeCheck.classList.remove("likeit_change");
        document.querySelector('.peed_option_sub_header_like').innerHTML = '좋아요 285개';
        likeColorChange = 0;
    }
}

likeCheck.addEventListener('click', likeItPlus);