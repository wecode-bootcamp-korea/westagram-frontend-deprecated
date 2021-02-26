const textArea = document.querySelector(".textArea");
const commentBtn = document.querySelector('.commentBtn');
const search = document.querySelector('.search');

commentBtn.addEventListener("click", function(){
    const comment = document.querySelector(".textArea").value;
    console.log(comment);
    const li = document.createElement('li');
    const ul = document.querySelector(".commentArea");
    li.innerHTML = `songbetter ${comment}`;
    ul.appendChild(li);
    // comment = '';
});

textArea.addEventListener("keydown", function(e){
    if (e.keyCode == 13){
        commentBtn.click();
}})