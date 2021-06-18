const replyButton = document.getElementById('reply-btn');
const input = document.getElementById('input');
const list = document.getElementById('list');

replyButton.addEventListener('click', function(e) {
    const temp = document.createElement('li');
    temp.innerHTML = `<span class="name"><strong> zzz_yk</strong></span><span>${input.value}</span>`;
    list.appendChild(temp);

    input.value="";
});

function enterKey() {
    if(e.keyCode == 13) {

    }
}