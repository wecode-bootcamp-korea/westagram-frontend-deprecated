const inputText = document.querySelector('.plus_text');//input 변수 할당
const inputBtn = document.querySelector('.submit_button');//button 변수 할당
const commentBoard = document.querySelector('.thatComment');//댓글이 달릴부분 변수 할당

//게시 버튼 활성화 부분(색깔 변화로 활성화 구분)
inputText.addEventListener('keyup',function(){
  const changeBtnColor = inputText.value.length>0;
  inputBtn.disabled = changeBtnColor? false:true;
})
//클릭했을때 댓글 추가가 가능하게끔
inputBtn.addEventListener('click', addComment);
function addComment(){
  const profileId = document.createElement('span');
  const commentContents = document.createElement('span');
  const br = document.createElement('br');

  commentContents.className = 'newComment';
  commentContents.innerHTML = inputText.value;
  profileId.className = 'myId';
  profileId.innerHTML = 'junhyeongchae  ';

  if (inputText.value !==""&& inputText.value.trim() !==""){
    commentBoard.appendChild(profileId) +
    commentBoard.appendChild(commentContents) +
    commentBoard.appendChild(br);
    inputText.value = null;

  }
}
//엔터했을때 댓글 추가가 가능하게끔  --- 반복을 줄인 Version
inputText.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
        addComment();
  }
});

// inputText.addEventListener('keypress', enter);
// function enter(e){
//   const profileId = document.createElement('span');
//   const commentContents = document.createElement('span');
//   const br = document.createElement('br');

//   commentContents.className = 'newComment';
//   commentContents.innerHTML = inputText.value;
//   profileId.className = 'myId';
//   profileId.innerHTML = 'junhyeongchae  ';
//   if(
//     inputText.value !== "" &&
//     inputText.value.trim() !== "" &&
//     e.key === 'Enter'
//   ){
//     commentBoard.appendChild(profileId) +
//     commentBoard.appendChild(commentContents) +
//     commentBoard.appendChild(br);
//     inputText.value = null;
//   }
// }
