const inputarea = document.querySelector('.inputArea');
const upload = document.querySelector('.upload');
const otherComment = document.querySelector('.otherComment');

upload.addEventListener('click',function(){
    let comment_list = document.createElement("LI");
    let new_comment = document.createTextNode(inputarea.value);
    comment_list.appendChild(new_comment);
    otherComment.appendChild(comment_list);

    
})
