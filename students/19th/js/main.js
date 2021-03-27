const InputText = document.getElementsByClassName('FeedContentInputBoxCommentInput')[0];


const AddComment = () =>{
    const List = document.querySelector('.FeedContentCommentList');
    const NewList = document.createElement('li');
    const NewSpan = document.createElement('span');
    NewList.appendChild(NewSpan);
    NewSpan.textContent = InputText.value;
    List.append(NewList);
    InputText.value = "";
    
}

const Enter = (e) => {
    if(e.key == "Enter"){
        AddComment();
    }
}
