
const clickBtn = document.getElementsByTagName('button')[0]; 
const commentInput = document.getElementsByTagName('input')[1];

commentInput.addEventListener("keyup", uploadComment); 

function uploadComment(e) { 
    if(e.keyCode === 13) { 

        let comment = document.getElementById("commentPlus");
        let makeDiv = document.createElement('div'); 
        let makeUser = document.createElement('span'); 
        let makeMsg = document.createElement('span'); 
        let makeBtn = document.createElement('button'); 
        
        makeDiv.className = "commentDiv" 
        makeUser.className = "commentUser"; 
        makeMsg.className = "commentMsg"; 
        makeBtn.className = "deleteBtn"; 
        
        makeMsg.innerHTML = commentInput.value;
        makeUser.innerHTML = "wecode_20"; 
        makeBtn.innerHTML = "삭제" 
        
        comment.appendChild(makeDiv); 
        makeDiv.appendChild(makeUser); 
        makeDiv.appendChild(makeMsg);
        makeDiv.appendChild(makeBtn); 
          
    makeBtn.addEventListener("click", (event) => {
        const btn = event.target; 
        const deleteAll = btn.parentNode; 
        comment.removeChild(deleteAll); 
    })
}}

