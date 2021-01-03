const myId = 'katej927 '
const postingBtn = document.getElementsByClassName('postingBtn')[0];
const commentInput = document.getElementsByClassName('commentInput')[0];
const ul = document.querySelector('ul');

postingBtn.addEventListener('click', function() {
    const commentValue= commentInput.value;
    if (commentValue) {
        const li = document.createElement('li');
        li.className="commentNewLi"
        li.innerHTML='<span class="nickname">' + myId + '</span><span class="commentValue">' + commentValue + '</span>';
        ul.appendChild(li)
        commentInput.value=''
    }
});

document.addEventListener('keyup', function(e) {
    const commentValue= commentInput.value;
    if (e.keyCode === 13 && commentValue !== "") {
        const li = document.createElement('li');
        li.className="commentNewLi"
        li.innerHTML='<span class="nickname">' + myId + '</span><span class="commentValue">' + commentValue + '</span>'
        ul.appendChild(li)
        commentInput.value=''
    }
})