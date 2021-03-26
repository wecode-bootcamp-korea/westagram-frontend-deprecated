const uploadBtn = document.querySelector(".upload-button"),
      newComment = document.querySelector(".add-comment"),
      inputText = document.querySelector(".input-comment");

function handleClick () {
    currentValue = inputText.value;
    if (inputText.value == '') {
        return
    } 
    addComment(currentValue);
    newComment.scrollIntoView({block: "center"});
    inputText.value = '';
}

function addComment (text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const fixedMyId = "itssweetrain";
    const makeIdBold = fixedMyId.bold();

    newComment.appendChild(li);
    li.appendChild(span);
    span.innerHTML = `${makeIdBold} ${text}`;
}

uploadBtn.addEventListener('click',handleClick);
inputText.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        handleClick();
    }
});
        