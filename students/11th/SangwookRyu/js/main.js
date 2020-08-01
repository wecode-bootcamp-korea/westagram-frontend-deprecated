const buttonOnOffComment = document.getElementById('writecomment');

buttonOnOffComment.addEventListener('keyup', function(e) {
  const comment = document.getElementById('writecomment').value;
  let btn = document.getElementById('addcomment');
  
  if (comment.length > 0) {
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
});
