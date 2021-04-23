const reply = document.querySelector(".reply");
const post = document.querySelector(".post");;
const reply_list = document.querySelector(".reply_list_all");
const ilike = document.querySelector(".iLike");
const del = document.querySelector(".del");

reply.addEventListener('keydown',function(e){
    if(e.keyCode===13){
        reply_add();
    }
})

post.addEventListener('click',function(e){
    reply_add();
});

ilike.addEventListener('click',function(e){
    like_or_dislike();
});

del.addEventListener('click',function(){
    reply_del();
})

function reply_del(){
    let reply = document.querySelector(".added_reply");
    reply.remove();
}

function like_or_dislike(){
       let like="img/heart.png";
       let dislike="img/like.png";
        document.querySelector(".status_like").src=like;
}

function reply_add(){
   let reply = document.createElement('li');
   reply.innerHTML = `${document.querySelector(".reply").value}`;
   reply.className = "added_reply";
   reply_list.appendChild(reply);
}