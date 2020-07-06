const search = document.getElementsByClassName('search')[0];
const commentInput = document.getElementsByClassName('commentInput')[0];
let num = 0;
const button = document.getElementsByClassName('button')[0];

search.addEventListener('focus', function(){
    const searchImg = document.getElementsByClassName('searchImg')[0];   
    searchImg.classList.add("searchImgFocus")
    search.classList.add("searchFocus")
    console.log("a")
});

search.addEventListener('focusout', function(){
    const searchImg = document.getElementsByClassName('searchImg')[0];
    searchImg.classList.remove("searchImgFocus")
    search.classList.remove("searchFocus")
  });

commentInput.addEventListener('keyup', function(key){
    const div = document.createElement('div');
    const spanName = document.createElement('span');
    const spanComment = document.createElement('span');
    const img = document.createElement('img');   
    let commentLast = document.getElementsByClassName('commentBox')[num];
    let value = document.getElementsByClassName('commentInput')[0].value;
   
    if(key.keyCode  === 13 && value) {
        spanName.className = "name";
        spanName.innerHTML = "hoho";
        spanComment.innerHTML = value;
        img.alt = "love";
        img.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
        div.className = "commentBox";
        div.appendChild(spanName);
        div.appendChild(spanComment);
        div.appendChild(img);
        commentLast.after(div);
        num ++;
    }
});

button.addEventListener('click', function(){
    const div = document.createElement('div');
    const spanName = document.createElement('span');
    const spanComment = document.createElement('span');
    const img = document.createElement('img');   
    let commentLast = document.getElementsByClassName('commentBox')[num];
    let value = document.getElementsByClassName('commentInput')[0].value;

    if(value) {
        spanName.className = "name";
        spanName.innerHTML = "hoho";
        spanComment.innerHTML = value;
        img.alt = "love";
        img.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
        div.className = "commentBox";
        div.appendChild(spanName);
        div.appendChild(spanComment);
        div.appendChild(img);
        commentLast.after(div);
        num ++;
    }
});


