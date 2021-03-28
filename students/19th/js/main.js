const InputText = document.getElementsByClassName('FeedContentInputBoxCommentInput')[0];
let IdCount = 0;
let Regex = /\d+/g;
const AddComment = () =>{
    const List = document.querySelector('.FeedContentCommentList');
    const RemoveCommnetDiv = document.createElement('div');
    const NewList = document.createElement('li');
    const NewSpan = document.createElement('span');
    const RemoveCommentBtn = document.createElement('div');
    
    RemoveCommentBtn.classList.add("Remove");
    RemoveCommnetDiv.classList.add('RemoveCommnet');
    RemoveCommnetDiv.appendChild(NewList);
    NewList.appendChild(NewSpan);

    RemoveCommnetDiv.appendChild(RemoveCommentBtn);

    NewSpan.textContent = InputText.value;

    List.append(RemoveCommnetDiv);
    RemoveCommentBtn.append("X");
    RemoveCommnetDiv.id = "CommentId" + IdCount;
    IdCount++;
    InputText.value = "";

    RemoveCommentBtn.onclick = function(){

    let CommentId = document.getElementById(RemoveCommnetDiv.id);
    CommentId.remove();
    
}
    
}
const Enter = (e) => {
    if(e.key == "Enter"){
        AddComment();
    }
}
