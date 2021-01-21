const form = document.getElementById("comment");

form.addEventListener('keyup',addcomment);

function addcomment(e){
    
    
    
    if (e.keycode === 13){
        
        
//   const commentvalue = document.getElementById("comment").value;

  const commentcontainer = document.getElementById("comment");
  const commenttext = document.createElement("span");
  const deletebtn = document.createElement("BUTTON");

  commentcontainer.className = 'box';
  commenttext.className='text';
  deletebtn.className='deletebtn';

  commentcontainer.appendChild(commettext);
  commentcontainer.appendChild(deletebtn);

  commettext.innerHTML=form.value;
  commentcontainer.appendChild(commettext);
  commentcontainer.appendChild(deletebtn);


    }





}