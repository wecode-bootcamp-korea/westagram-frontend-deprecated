const replyButton = document.getElementById('reply-btn');
const input = document.getElementById('input');
const list = document.getElementById('list');

replyButton.addEventListener('click', function(e) {
    const temp = document.createElement('li');
    temp.innerHTML = input.value;
    list.appendChild(temp);
});