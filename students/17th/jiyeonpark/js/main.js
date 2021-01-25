const comment_form = document.getElementsByClassName('form')[0];
const comment_button = document.getElementsByClassName('comment_input_button')[0];

comment_form.addEventListener('submit',() =>{
  const commentInput = document.getElementsByClassName('comment_input_box')[0].value;
  const commentList = document.getElementsByClassName('comment_list')[0];
  console.log(commentInput)
  commentList.innerHTML = `<p>jiyeon0807 ${commentInput}</p>`;
})