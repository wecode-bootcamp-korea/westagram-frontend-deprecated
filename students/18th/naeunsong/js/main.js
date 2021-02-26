const textArea = document.querySelector(".textArea");
const commentBtn = document.querySelector('.commentBtn');
const search = document.querySelector('.search');
const userId = "songbetter";

commentBtn.addEventListener("click", function(){
    const comment = document.querySelector(".textArea").value;
    const li = document.createElement('li');
    const ul = document.querySelector(".commentArea");
    li.innerHTML = `<a>${userId}</a> ${comment}`;
    ul.appendChild(li);
    document.querySelector(".textArea").value = "";
});

textArea.addEventListener("keydown", function(e){
    if (e.keyCode == 13){
        let a = commentBtn.click();
}})

