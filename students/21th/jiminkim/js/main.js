const loginId = `jemizem`;


const txtFindPoeple = document.getElementById('txtFindPoeple');

var searchBox = document.getElementById('head-search-wrap');
const ulElement = document.getElementById('ulFindedPeopleList');

const appendComment = (event) => {
    
    let commentId = event.target.id.substr(-2);
    const commentTextarea = document.getElementById('textComment'+commentId);
    const commentAddButton = document.getElementById('commentButton'+commentId);
    const commentList = document.getElementById('commentList'+commentId);

    let commentStr = commentTextarea.value;
    commentStr = commentStr.replace(/(?:\r\n|\r|\n)/g,'');

    if (commentStr == '' ) {
        commentAddButton.classList.add("inactive");
        return;
    } else {
        commentAddButton.classList.remove("inactive");
    }

    if (event.target.nodeName === 'TEXTAREA') {
        if (event.key != 'Enter') return;
    }

    let commentLi = document.createElement('li')
    commentList.appendChild(commentLi);

    // 댓글 element 만들기 프로필사진 / 아이디 / 댓글내용 / 삭제 / 하트
    let commenter = document.createElement('span');
    commenter.innerHTML = `${loginId}`;
    commenter.className = "nickname bold";
    commentLi.appendChild(commenter);

    let commentContent = document.createElement('span');
    commentContent.innerHTML = commentTextarea.value;
    commentContent.className = "comment";
    commentLi.appendChild(commentContent);
    commentTextarea.value = "";
    
    let commentButtonDiv = document.createElement('div');
    commentButtonDiv.className = "button-list";
    commentLi.appendChild(commentButtonDiv);

    let commentDeleteButton = document.createElement('button');
    commentDeleteButton.innerHTML = "✖️";
    commentDeleteButton.className = "comment-delete-button";
    commentDeleteButton.addEventListener('click',(event)=>{ 
        const parentUl = event.target.parentElement.parentElement.parentElement;
        const deleteLi = event.target.parentElement.parentElement;
        parentUl.removeChild(deleteLi);
    });
    commentButtonDiv.appendChild(commentDeleteButton);
    
    let commentHeartButton = document.createElement('button');
    commentHeartButton.innerHTML = "♡";
    commentHeartButton.className = "comment-heart-button";
    commentHeartButton.addEventListener('click',(event)=>{ 
        if (event.target.innerHTML == '♡') {
            event.target.innerHTML = "♥︎";
        } else {
            event.target.innerHTML = "♡";
        }
     });
    commentButtonDiv.appendChild(commentHeartButton);
    commentAddButton.classList.add("inactive");
} 



var commentButtons = document.getElementsByClassName('commentButton');

for(var i = 0; i < commentButtons.length; i++) {
    commentButtons[i].addEventListener('click', appendComment);
}

var commentTextareas = document.getElementsByClassName('commentTextarea');

for(var i = 0; i < commentTextareas.length; i++) {
    commentTextareas[i].addEventListener('keyup', appendComment);
}


const people = [
    {
      name: 'Wecode',
      type: 'user',
      img: 'https://picsum.photos/200',
      description: 'wecode!'
    }
    , {
      name: 'Wenaldo',
      type: 'user',
      img: 'https://picsum.photos/300',
      description: 'nice~~'
    }
    , {
      name: 'Kim jimin',
      type: 'user',
      img: 'https://picsum.photos/400',
      description: 'hihi'
    }
  ];

  
const findPeople = (event) => {
    
    // 초기화
    ulElement.innerHTML = '';
    searchBox.classList.add("display-none");

    if (txtFindPoeple.value == '')  return;
    
    people.filter(person => person.name.toUpperCase().includes(txtFindPoeple.value.toUpperCase()))
    .map((per)=>
    {
        searchBox.classList.remove("display-none");
        const liElement = document.createElement('li');
        liElement.addEventListener('click',(event) => {
            txtFindPoeple.value = per.name;
            searchBox.classList.add("display-none");
        });
        
        const divElement = document.createElement('div');
        divElement.className = "box";
        liElement.appendChild(divElement);

        const imgElement = document.createElement('img');
        imgElement.className = "profile";
        imgElement.src = per.img;
        imgElement.alt = `${per.name}님의 프로필 사진`
        divElement.appendChild(imgElement);

        const divDescElement = document.createElement('div');
        divDescElement.className = "profile-desc";
        liElement.appendChild(divDescElement);

        const divNicknameElement = document.createElement('div');
        divNicknameElement.className = "bold";
        divNicknameElement.innerHTML = per.name;
        divDescElement.appendChild(divNicknameElement);

        const divDetailElement = document.createElement('div');
        divDetailElement.className = "gray";
        divDetailElement.innerHTML = per.description;
        divDescElement.appendChild(divDetailElement);

        ulElement.appendChild(liElement);
    });
}



txtFindPoeple.addEventListener('keyup', findPeople);
