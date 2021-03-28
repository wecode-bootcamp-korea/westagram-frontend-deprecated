const InputText = document.getElementsByClassName('FeedContentInputBoxCommentInput')[0];
let IdCount, LikeCount = 0;

const AddComment = () =>{
    const List = document.querySelector('.FeedContentCommentList');
    const RemoveCommentDiv = document.createElement('div');
    const RemoveCommentBtn = document.createElement('div');
    const NewList = document.createElement('li');
    const NewSpan = document.createElement('span');
    const CommentX = document.createElement('div');
    const CommentLike = document.createElement('div');

    RemoveCommentDiv.classList.add('RemoveComment');
    RemoveCommentDiv.appendChild(NewList);
    RemoveCommentDiv.appendChild(RemoveCommentBtn);
    
    RemoveCommentBtn.classList.add("Remove");
    RemoveCommentBtn.appendChild(CommentLike);
    RemoveCommentBtn.appendChild(CommentX);
    
    NewList.appendChild(NewSpan);

    NewSpan.textContent = InputText.value;

    List.append(RemoveCommentDiv);
    CommentLike.append("♡");
    CommentX.append("X");
    CommentX.id = "CommentXId" + IdCount;
    CommentLike.id = "CommentLikeId" + LikeCount;
    IdCount++;
    LikeCount++;
    InputText.value = "";

    CommentX.onclick = function(){
    let CommentXId = document.getElementById(CommentX.id);
    RemoveCommentDiv.remove();
}
    CommentLike.onclick = function(){
    let CommentLikeId = document.getElementById(CommentLike.id);

    if(CommentLike.style.color == "red"){
       CommentLike.style.color = "black";
    }else {
        CommentLike.style.color = "red";
    }
}
}
const Enter = (e) => {
    if(e.key == "Enter"){
        AddComment();
    }
}
