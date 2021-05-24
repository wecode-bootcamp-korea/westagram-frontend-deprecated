/*main Script*/
const commentInput = document.querySelector(".comment-input");
const commentBtn = document.querySelector(".upload-btn");
const ul = document.querySelector(".comment-ul")

function uploadBtnChange(){
    
    const InputValue = commentInput.value;
    

    if(InputValue.length>0){
        commentBtn.style.color = "black"; //변화
        } else{
            commentBtn.style.color = "rgba(64, 149, 225,0.35)";
        }
    }

    commentInput.addEventListener('keyup',uploadBtnChange);




function addcomment(){
    
    const li = document.createElement("li");  
    const commentContainer = document.createElement("div");
    const textBox = document.createElement("span");  
    const name = document.createElement("span");
    const commentText = document.createElement("span");
   
    commentContainer.classList.add('comment-container');
    li.classList.add('comment-li');
    textBox.classList.add('comment-text');
    name.classList.add('comment-name');
    commentText.classList.add('comment');
    
    name.innerText = 'headbingbing__';
    commentText.innerText = commentInput.value;
    
    li.appendChild(commentContainer)
    commentContainer.appendChild(textBox);
    textBox.appendChild(name);
    textBox.appendChild(commentText);
      
ul.appendChild(li);

console.log(li);

}

commentBtn.addEventListener('click',addcomment)


