const commentBtn = document.querySelector('.commentBtn');

commentBtn.addEventListener("click", function(){
    const comment = document.querySelector(".textArea").value;
    console.log(comment);
    const li = document.createElement('li');
    const ul = document.querySelector(".commentArea");
    li.innerHTML = `songbetter ${comment}`;
    ul.appendChild(li);
    // comment = '';
});
