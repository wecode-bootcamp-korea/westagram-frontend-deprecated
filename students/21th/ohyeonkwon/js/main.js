/*main Script*/
let commentInput=document.querySelector(".comment-input").value ='';
let commentInput = document.querySelector(".comment-input");
let commentBtn = document.querySelector(".upload-btn");
let ul = document.querySelector(".comment-ul")

function uploadBtnChange(){
    
    let InputValue = commentInput.value;
    

    if(InputValue.length>0){
        commentBtn.style.color = "black"; //변화
        } else{
            commentBtn.style.color = "rgba(64, 149, 225,0.35)";
        }
    }

    commentInput.addEventListener('keyup',uploadBtnChange);




function addcomment(){
    
    let li = document.createElement("li");
    console.log(li);
    
    let commentContainer = document.createElement("div");
    console.log(commentContainer);
    let textBox = document.createElement("span");
    console.log(textBox);
    let name = document.createElement("span");
    console.log(name);
   
    commentContainer.classList.add('comment-container');
    li.classList.add('comment-li');
    textBox.classList.add('comment-text');
    name.classList.add('comment-name');

    textBox=commentInput.value;
    newTextBox.innerText = textBox

                                   ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋZzzzzzzzz
    //ul.appendChild(commentContainer);
    ul.appendChild(li);
  //ul.appendChild(textBox);
}

commentBtn.addEventListener('click',addcomment)


