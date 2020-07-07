const v = document.getElementsByClassName("commentUser")
console.log(v);

const clickBtn = document.getElementsByTagName('button')[0];
const addComment = document.getElementsByTagName('input')[1];

addComment.addEventListener('click', () => {
    clickBtn.style.color = "#3386f2";
        
});

addComment.addEventListener("keyup", uploadComment);
clickBtn.addEventListener("click", uploadComments);


function uploadComment(e) {
    if(e.keyCode === 13) {

        let comment = document.getElementById("commentUpload");
        let makeDiv = document.createElement('div');
        let makeUser = document.createElement('span');
        let makeMsg = document.createElement('span');
        let makeBtn = document.createElement('BUTTON');
        
        makeDiv.className = "commentDiv"
        makeUser.className = "commentUser";
        makeMsg.className = "commentMsg";
        makeBtn.className = "deleteBtn"
        
        makeMsg.innerHTML = addComment.value;
        makeUser.innerHTML = "Kim jeong ho";
        makeBtn.innerHTML = "삭제"
        
        comment.appendChild(makeDiv);
        makeDiv.appendChild(makeUser);
        makeDiv.appendChild(makeMsg);
        makeDiv.appendChild(makeBtn);
        
          
        deleteTyped();
        changeBack(); 

    makeBtn.addEventListener("click", (e) => {
        
       
        const btn = event.target;
        const deleteAll = btn.parentNode;
        
        comment.removeChild(deleteAll);
    })

}}
    
function uploadComments() {
     
    
        let comment = document.getElementById("commentUpload");
        let makeDiv = document.createElement('div');
        let makeUser = document.createElement('span');
        let makeMsg = document.createElement('span');
        let makeBtn = document.createElement('BUTTON');
        
        makeDiv.className = "commentDiv"
        makeUser.className = "commentUser";
        makeMsg.className = "commentMsg";
        makeBtn.className = "deleteBtn"
    
        makeUser.innerHTML = "Kim jeong ho";
        makeMsg.innerHTML = addComment.value;
        makeBtn.innerHTML = "댓글삭제"
         
        comment.appendChild(makeDiv);
        makeDiv.appendChild(makeUser);
        makeDiv.appendChild(makeBtn); 
        makeDiv.appendChild(makeMsg);    

        deleteTyped();   
        changeBack(); 

        makeBtn.addEventListener("click", (e) => {
               
            const btn = event.target;
            const deleteAll = btn.parentNode;
                
            comment.removeChild(deleteAll);
        })

}

function deleteTyped() {
    addComment.value = "";
}

function changeBack() {
    clickBtn.style.color = "#bfe0f2";
}