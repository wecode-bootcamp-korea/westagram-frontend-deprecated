const form = document.getElementById('comment');
const formvalue = document.getElementById('comment').value;
const deletebtn = document.createElement("BUTTON");
const likebtn = document.createElement("img");



form.addEventListener("keyup",addcomment); // 댓글을 썼을때 작동되는 함수

function addcomment(e){
      if (e.keyCode === 13){
       
  const commentcontainer = document.getElementById("commentbox");
  const commentbtnbox = document.createElement("div");
  const commenttext = document.createElement("span");
  const deletebtn = document.createElement("BUTTON");
  const likebtn = document.createElement("img");
  const btncontainer = document.createElement("div");

  commentcontainer.className = 'box'; // class속성부텨
  commenttext.className='text';
  deletebtn.className='deletebtn';
  commentbtnbox.className='commentbtn';
  likebtn.className='likebtn';
  btncontainer.className = 'btncontainer';


  likebtn.src="img/heart.png";
  deletebtn.innerText="삭제";
commenttext.innerHTML=form.value;
commentcontainer.appendChild(commentbtnbox);
commentbtnbox.appendChild(commenttext);
commentbtnbox.appendChild(btncontainer);//commentbtnbox에 text랑 like delete btn이 들어있는 div 넣기 
btncontainer.appendChild(likebtn);
btncontainer.appendChild(deletebtn);// btncontainer에 delete와 like btn 넣기 

form.value='';
likebtn.addEventListener("click",function changered(){ //댓글 좋아요 색깔 바꾸는 함수 
  likebtn.className='likebtn';
  


if(likebtn.getAttribute('src')=="img/heart-2.png")
{
  likebtn.src="img/heart.png";
}else if(
  likebtn.getAttribute('src')=="img/heart.png"){
  likebtn.src="img/heart-2.png";
}

});

deletebtn.addEventListener('click',(event)=>{ //delete 버튼함수

  const btn = event.target; 
        console.log(btn);
const btnbox =  btn.parentNode; 
        const deleteAll = btnbox.parentNode; // deletebtn과 likebtn을 묶어주는 div박스를 생성했기때문에 그 조부모요소(텍스트, btn박스가 포함된)를 지워야 된다.
        commentcontainer.removeChild(deleteAll);
});
 
}};





     