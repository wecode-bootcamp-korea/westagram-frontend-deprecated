let clickBtn = document.getElementsByClassName('comment_button')[0];
let textarea = document.getElementsByClassName('comment_textarea')[0];

function addFunc(){
    let hashtag = document.getElementsByClassName('section_hashtag')[0];
    let addElement = document.createElement('div');
    let addText = document.createTextNode(textarea.value);

    addElement.appendChild(addText);
    hashtag.appendChild(addElement);
}

clickBtn.addEventListener('click', addFunc);
textarea.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        addFunc();
    }
});