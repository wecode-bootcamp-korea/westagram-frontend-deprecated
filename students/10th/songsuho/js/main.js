let push = document.getElementsByClassName('comment_Push')[0];
let input_Text = document.getElementsByClassName('comment_Input')[0];
let pickup_idcontents=document.getElementsByClassName('id_contents')[0];
let comment_value = document.getElementsByClassName('comment_Input');

input_Text.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        let comment_Box = document.createElement('div');
        let username = document.createElement('span');
        let textarea = document.createElement('span');
        username.className="id";
        textarea.className="comment_Textarea";
        username.innerHTML='Greenkitkat14';
        textarea.innerHTML= input_Text.value;
        pickup_idcontents.appendChild(comment_Box);
        comment_Box.appendChild(username);
        comment_Box.appendChild(textarea);
        input_Text.value="";
        console.log(input_Text.value)
    }
})  

push.addEventListener('click', function() {
    if (comment_value !== "") {
        let comment_Box = document.createElement('div');
        let username = document.createElement('span');
        let textarea = document.createElement('span');
        username.className="id";
        textarea.className="comment_Textarea";
        username.innerHTML='Greenkitkat14';
        textarea.innerHTML= input_Text.value;
        pickup_idcontents.appendChild(comment_Box);
        comment_Box.appendChild(username);
        comment_Box.appendChild(textarea);
        input_Text.value="";
    }
})




