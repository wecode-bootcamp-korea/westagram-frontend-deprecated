const commentForm = document.querySelector('.writing__form');
const commentInput = document.querySelector('.writing__input');
const commentBtn = document.querySelector('.writing__btn');
const commentlist = document.querySelector('.comments__display');
const userId = document.querySelector('.login-user');
const searchInput = document.querySelector('.search-input');
const searchCancle = document.querySelector('.searchIcon-cancel');
const storyBox = document.querySelector('.stories');
const userIds = storyBox.querySelectorAll('.user__id');
const searchModal = document.querySelector('.search-modal'); 

let sortedUser;

const listObject = [{id: 'emma_winggle', name: 'Emma_Winggle', img: 'http://bitly.kr/xiZ73FYcQCc'}, 
    {id: 'rampart81', name: '송은우 (Eun Woo Song)', img: 'http://bitly.kr/021U6rCMDEn'}, 
    {id: 'grace93', name: 'grace kim', img: 'http://bitly.kr/1OCQEiFSBhM'}, 
    {id: 'emmawatson', name: 'Emma Watson', img: 'http://bitly.kr/S5BLEX7VlX'}, 
    {id: 'nayoungkeem', name: '김나영', img: 'http://bitly.kr/5OXfZaBi5uS'}, 
    {id: 'merienda_macaron_', name: '메리엔다', img: 'http://bitly.kr/gcLvjNG119H'},
    {id: 'elalbe', name: 'Alberto 알베르토 몬디', img: 'http://bitly.kr/eMHxP7jtDhT'},
    {id: 'roma.emo', name: 'Hanjimin', img: 'http://bitly.kr/zAb0yvxq0Ss'},
    {id: 'emmanuelmacron', name: 'Emmanuel Macron', img: 'http://bitly.kr/WkNosJ6ixyg'},
    {id: 'emmaroberts', name: 'Emma Roberts', img: 'http://bitly.kr/40AeIpxepwI'}
];


function sliceUserId() {
    for (let i = 0; i < userIds.length; i++) {
        let id = userIds[i].innerHTML;
        if(id.length > 10) {
            const slicedId = id.slice(0, 9);
            id = `${slicedId}...`;
        }
        userIds[i].innerHTML = id;
    }
}

function handleOpenModal() {
    let texts = searchInput.value;
    // searchModal.removeChild(searchModal.childNodes[0]);
    for (let i = 0; i < listObject.length; i++) {
        let idAarray = listObject[i].id;
        if (idAarray.includes(texts)) {
            const li = document.createElement('li');
            const imgBox = document.createElement('div');
            const textBox = document.createElement('div');
            const img = document.createElement('img');
            const idText = document.createElement('span');
            const nameText = document.createElement('span');
            img.src = listObject[i].img;
            idText.innerText = listObject[i].id;
            idText.className = 'text-box__user-id';
            nameText.innerText = listObject[i].name;
            nameText.className = 'text-box__user-name';
            imgBox.className = 'modal__img-box';
            textBox.className = 'modal__text-box';
            imgBox.append(img);
            textBox.append(idText);
            textBox.append(nameText);
            li.append(imgBox);
            li.append(textBox);
            sortedUser = li;
            console.log(sortedUser);
            searchModal.style.visibility = 'visible';
        }
        // searchModal.innerHTML = sortedUser;
        const ul = document.createElement('ul');
        ul.append(sortedUser);
        console.log(typeof ul);
        searchModal.innerHTML = JSON.stringify(ul);
    }
}

function handleCloseModal() {
    searchModal.style.visibility = 'hidden';
    searchInput.value = "";
}

function handleBtn() {
    if (commentInput.value.length >= 1) {
        commentBtn.style.color = '#0095f6';
    } else {
        commentBtn.style.color = '#cce6fd';
    }
}

function handleCommentUpload(event) {
    event.preventDefault();
    const li = document.createElement('li');
    const textBox = document.createElement('div');
    const iconBox = document.createElement('div');
    const commentUserId = document.createElement('span');
    const commentText = document.createElement('span');
    const heartIcon = document.createElement('i');
    commentUserId.innerText = userId.innerText;
    commentText.innerText = commentInput.value;
    commentUserId.className = 'texts__username user__id';
    commentText.className = 'texts__contents';
    heartIcon.className = 'far fa-heart';
    textBox.className = 'comment__texts';
    iconBox.className = 'comment__heart-btn';
    li.className = 'comment';
    textBox.append(commentUserId);
    textBox.append(commentText);
    iconBox.append(heartIcon);
    li.append(textBox);
    li.append(iconBox);
    commentlist.append(li);
    commentInput.value = "";
}

function handleFeedClickHeart() {
    heartIcon.style.visibility = 'hidden';
    redHeartIcon.style.visibility = 'visible';
}

function init() {
    sliceUserId();
    searchInput.addEventListener('keyup', handleOpenModal);
    searchInput.addEventListener('focusout', handleCloseModal);
    searchCancle.addEventListener('click', handleCloseModal);
    commentInput.addEventListener('keyup', handleBtn);
    commentForm.addEventListener('submit', handleCommentUpload);
}

init();