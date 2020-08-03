const btnOnOffComment = document.getElementsByClassName('write-comment')[0];

btnOnOffComment.addEventListener('keyup', function() {
  const comment = document.getElementsByClassName('write-comment')[0].value;
  const btn = document.getElementsByClassName('add-comment')[0];

  btn.disabled = comment.length > 0 ? false : true;
  console.log("hello");

});
