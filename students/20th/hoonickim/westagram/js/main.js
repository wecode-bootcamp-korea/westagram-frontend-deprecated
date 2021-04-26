const commentInput = document.querySelector(".commentInput");
const commentButton = document.querySelector(".commentButton");

function colorActivate() {
    if(commentInput.value) {
      commentButton.removeAttribute("disabled");
      commentButton.classList.add("buttonActive");
    }
    else {
      commentButton.setAttribute("disabled", "disabled");
      commentButton.classList.remove("buttonActive")
    }
};

commentInput.addEventListener('input', colorActivate);


// add comment

const commentLists = document.querySelector('.commentLists');

const addComment = () => {
  // const commentList = document.createElement('li');
  const commentText = document.createElement('p');

  // commentList.className = 'commentList';
  commentText.className = 'commentTxet';

  // commentLists.appendChild(commentList);
  commentLists.appendChild(commentText);

  commentText.innerText = commentInput.value;
  commentInput.value = '';

};

  commentInput.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
      addComment();
    }
  });
