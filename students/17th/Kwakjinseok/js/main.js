//댓글에 엔터나 게시를 누르면, 댓글 업로드
'use strict'

const comment = document.querySelector('#comment');
const subInButton = document.querySelector('.subInButton');
const replyMother = document.querySelector('.replyContainer');

comment.addEventListener('keyup', function() {
    const commentValue = document.querySelector('#comment').value;
    console.log('commentValue', commentValue)
    if (commentValue){
        subInButton.classList.add('activeSubInButton')
        // document.querySelector('#lastFooterButton').disabled = false 
    } if(!commentValue) {
        subInButton.classList.remove('activeSubInButton')
        // document.querySelector('#lastFooterButton').disabled = true
    }   
})

subInButton.addEventListener('click', function() {
  const commentValue = comment.value;
  const reply = document.createElement('div');
  let xolovemirjam = 'xolovemirjam'
  let hehe =xolovemirjam.bold();

  replyMother.appendChild(reply);
  reply.innerHTML = `${hehe} ${commentValue}`
  comment.value = ""
 //게시를 누르면 > 댓글아래 생성된 div태그에 value값이 같아진다.
})

// comment.addEventListener('keydown', fucntion(){

// } )