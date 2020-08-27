const thisIsInput = document.getElementById('commentInput');
const thisIsButton = document.getElementsByTagName('button')[0];
const thisIsUl = document.getElementsByTagName('ul')[0];
let thisIsLike = '';


thisIsInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter' && thisIsInput.value !== ''){
        const thisIsLi = document.createElement('li');
        const commentOption = document.createElement('div');
        const commentLike = document.createElement('img');
        const commentRemove = document.createElement('span');
        commentLike.className = 'comment--like';
        commentRemove.className = 'comment--remove';
        commentLike.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
        commentLike.style = 'cursor: pointer';
        commentRemove.innerHTML = '삭제';
        commentRemove.style = "cursor: pointer";
        commentOption.appendChild(commentLike);
        commentOption.appendChild(commentRemove);
        thisIsLi.innerHTML = thisIsInput.value;
        thisIsLi.appendChild(commentOption);
        thisIsUl.appendChild(thisIsLi);
        thisIsInput.value = null;

        thisIsLike = '';
        thisIsLike = document.querySelectorAll('.comment--like');
        console.log(thisIsLike);

        thisIsLike.forEach((el, index) => {
            console.log(el, index);

            el.addEventListener('click', function(e){
                console.log(e);

                e.target.src = './img/heart.png';
        })})

        const thisIsRemove = document.getElementsByClassName('comment--remove');
        for (let el of thisIsRemove){
            el.addEventListener('click', function(){
                el.parentElement.parentElement.remove();
        })}
}})



thisIsButton.addEventListener('click', function(){
    if (thisIsInput.value !== ''){
        const thisIsLi = document.createElement('li');
        const commentOption = document.createElement('div');
        const commentLike = document.createElement('img');
        const commentRemove = document.createElement('span');
        commentLike.className = 'comment--like';
        commentRemove.className = 'comment--remove';
        commentLike.src = 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png';
        commentLike.style = 'cursor: pointer';
        commentRemove.innerHTML = '삭제';
        commentRemove.style = "cursor: pointer";
        commentOption.appendChild(commentLike);
        commentOption.appendChild(commentRemove);
        thisIsLi.innerHTML = thisIsInput.value;
        thisIsLi.appendChild(commentOption);
        thisIsUl.appendChild(thisIsLi);
        thisIsInput.value = null;
}})