const input_area = document.querySelector('.input_area');
const upload_btn = document.querySelector('.upload_btn');
const comment_section_user_text = document.querySelector('.comment_section_user_text');
const search_bar_container = document.querySelector('.search_bar_container');

upload_btn.addEventListener('click',function(){
    let tag_a = document.createElement("a");
    let text = document.createTextNode("WeCode");
    let tag_list=document.createElement('li');
    let tag_span = document.createTextNode(' '+input_area.value);

    if(input_area.value.length==0){
        alert("댓글을 입력해주세요");
    }else{    
        tag_a.setAttribute('href',"#")
        tag_a.appendChild(text);
        tag_list.appendChild(tag_a);
        tag_list.appendChild(tag_span);
        comment_section_user_text.appendChild(tag_list);
        input_area.value="";
    }
})

search_bar_container.addEventListener("click",function(){
    search_bar_container.remove();
})


