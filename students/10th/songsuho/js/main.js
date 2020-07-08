let push = document.getElementsByClassName('comment_Push')[0];
let input_Text = document.getElementsByClassName('comment_Input')[0];
let pickup_idcontents=document.getElementsByClassName('id_contents')[0];
let comment_value = document.getElementsByClassName('comment_Input');

/// 밸류 값을 제대로 출력하지 못하는 에러가 출력됨.(해결)

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



///////// 찾아보니 3가지의 기능이 요구됨. 1. 엔터나 게시를 눌러야 댓글이 추가되는 기능(해결)
///// 푸쉬하고 나서 인풋의 내용삭제가 요구됨(해결)
///// 친 내용이 해당 피드 섹션부분에 올라가야할 것.(해결)



