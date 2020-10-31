window.onload = () => {
    const write_btn = document.querySelectorAll('.write_btn');
    write_btn.forEach(el =>{
        el.addEventListener('click', e => {
            cnt_write(e.target);
        });
    })

    const cnt_area = document.querySelectorAll('.cnt_area');
    cnt_area.forEach(el => el.addEventListener('keydown', e =>{
        if(e.keyCode == 13 && !cnt_area.value.length) {
            e.preventDefault();
        }
    }));
    
    cnt_area.forEach((el , i) => el.addEventListener('keyup', e => {
        const login_btn = document.querySelectorAll('.write_btn');
        if(e.keyCode == 13 ){
            cnt_write(login_btn[i])            
        }else if(el.value.length && !login_btn[i].classList.contains('active')){
            login_btn[i].classList.toggle('active');
        }else if(!el.value.length && login_btn[i].classList.contains('active')){
            login_btn[i].classList.toggle('active');
        }
    }));

    const cnt_heart = document.querySelectorAll('.cnt_heart');
    cnt_heart.forEach((el)=>{
        el.addEventListener('click', e => {
            const parent_path = el.parentNode.parentNode;
            const cnt_select  = parent_path.querySelector('.like_cnt_span');
            let heart_cnt = parseInt(cnt_select.innerHTML);    
            el.classList.toggle('heart_check');
            setTimeout(()=>{
                el.classList.toggle('heart_check');
                el.classList.toggle('cnt_red_heart');
                cnt_select.innerHTML = el.classList.contains('cnt_red_heart') ? heart_cnt + 1: heart_cnt -1 ;
            },100);
        })
    });

    const coment_heart = document.querySelectorAll('.coment_heart');
    coment_heart.forEach((el)=>{
        el.addEventListener('click', e => {
            el.classList.toggle('coment_heart_check');
            setTimeout(()=>{
                el.classList.toggle('coment_heart_check');
                el.classList.toggle('coment_red_heart');
            },100);
        });
    });

    const del_coment = document.querySelectorAll('.del_coment');
    del_coment.forEach((el,i)=>{
        el.addEventListener('click',e =>{
            const set = el.parentNode.parentNode.parentNode;
            set.parentNode.removeChild(set)
        });
    });

    const hearder_my_incon = document.querySelector('.hearder_my_incon');
    hearder_my_incon.addEventListener('click',e =>{
        hearder_my_incon.classList.toggle('my_incon_click');
        document.querySelector('.myprofile').classList.toggle('display_none');
    });
    
    const help_serach_box = document.querySelector('.help_serach_box');
    const search_user = document.querySelector('.search_form input');
    search_user.addEventListener('input',e =>{
        const search_txt = document.querySelector('.search_txt');
        const search_list = document.querySelector('.search_list');
        const search_label = help_serach_box.querySelector('input').classList;
        search_list.innerHTML = "";
        if(search_txt.value){
            let ul = document.createElement('ul');
            for(let i in json_date){
                if(json_date[i].user_id.indexOf(search_txt.value) != -1 || json_date[i].user_name.indexOf(search_txt.value) != -1){
                    let li = document.createElement('li');
                    li.innerHTML = `
                    <div class="found_form"><img src="${json_date[i].url}" alt="이미지 썸네일">
                        <div>
                            <div class="found_id">${json_date[i].user_id}</div>
                            <div class="found_name">${json_date[i].user_name}</div>
                        </div>
                    </div>`;
                    ul.appendChild(li);
                }
            }
            if(!ul.innerHTML){
                let li = document.createElement('li');
                    li.innerHTML = `<div class="found_form">데이터가 없습니다</div>`;
                    ul.appendChild(li);
            }
            search_list.appendChild(ul);
        }else{
            if(search_label.contains('display_none')){
                search_label.toggle('display_none');
            }
        }
    });
    search_user.addEventListener('click', e =>{
        serch_form_click_event();
    })
    
    help_serach_box.addEventListener('click', e =>{
        search_user.focus();
        serch_form_click_event();
    });
}

const serch_form_click_event = () => {
    const help_serach_box = document.querySelector('.help_serach_box');

    if( !help_serach_box.classList.contains('move_helper')){
        help_serach_box.classList.toggle('move_helper');
    }
}

const focus_out = (select) =>{
    if(select.classList.contains('my_incon_click')){
        select.classList.toggle('my_incon_click');
        document.querySelector('.myprofile').classList.toggle('display_none');
    }
    
    const search_list = document.querySelector('.search_list');
    search_list.innerHTML = "";
    
    const help_serach_box = document.querySelector('.help_serach_box');
    if( help_serach_box.classList.contains('move_helper')){
        help_serach_box.classList.toggle('move_helper');
    }
}


const cnt_write = (ele) => {
    console.log(ele)
     if(ele.classList.contains('active')){
        const my_id = document.querySelector('.my_id').innerHTML;
        const input_txt = ele.parentNode.querySelector('.cnt_area');
        const list = ele.parentNode.parentNode.querySelector('.cnt_coment_list ul');

        let li = document.createElement('li');
        li.innerHTML = `
            <div>
                <h5> ${my_id} </h5>
                <span> ${input_txt.value} </span>
                <div class="coment_tool">
                    <span class="del_coment"></span>
                    <span class="coment_heart"></span>
                </div>
            </div>`;
        list.appendChild(li);
        
        input_txt.value = '';
        ele.classList.toggle('active');
    }
}