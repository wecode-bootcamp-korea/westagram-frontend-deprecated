
const form = document.querySelector('.mainFeedCommentBox')
const input = document.querySelector('.mainFeedCommentBoxInput');
const ul = document.querySelector('.mainFeedComments');
const li = document.createElement('li');
const spanUser = document.createElement('span');
const spanComm = document.createElement('span');

spanUser.className = 'commentUser';
spanComm.className = 'commentComm';
li.classList.add('mainFeedComment');

form.addEventListener('submit', addComment)

function addComment (event) {
    event.preventDefault();
    spanUser.innerHTML = 'Haiin.k';
    spanComm.innerHTML = input.value;
    li.append(spanUser);
    li.append(spanComm);
    ul.appendChild(li);
    input.value = "";
}
