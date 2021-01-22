const form = document.getElementById('comment');
const formvalue = document.getElementById('comment').value;
const deletebtn = document.createElement("BUTTON");

form.addEventListener("keyup",addcomment);

function addcomment(e){
      if (e.keyCode === 13){
        
//   const commentvalue = document.getElementById("comment").value;
  const commentcontainer = document.getElementById("commentbox");
  const commentbtnbox = document.createElement("div");
  const commenttext = document.createElement("span");
  const deletebtn = document.createElement("BUTTON");

  commentcontainer.className = 'box';
  commenttext.className='text';
  deletebtn.className='deletebtn';
  commentbtnbox.className='commentbtn';

  deletebtn.innerText="삭제";
commenttext.innerHTML=form.value;
commentcontainer.appendChild(commentbtnbox);
commentbtnbox.appendChild(commenttext);
commentbtnbox.appendChild(deletebtn);
form.value='';

deletebtn.addEventListener('click',(event)=>{

  const btn = event.target; 
        console.log(btn);

        const deleteAll = btn.parentNode; 
        
        commentcontainer.removeChild(deleteAll); 


});









    }
}

