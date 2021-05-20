const newComment = document.querySelector('.newComment');
const comments = document.querySelector('.comments')
const postingButton = document.querySelector('.postingButton');

postingButton.addEventListener('click', function (){
  const newDiv = document.createElement('div');
  newDiv.classList.add('comment');
  newDiv.innerHTML = `<span class="boldUserId">Yujung</span> ${newComment.value}`;
  comments.appendChild(newDiv);
  console.log(newDiv);
  newComment.value = '';
})


