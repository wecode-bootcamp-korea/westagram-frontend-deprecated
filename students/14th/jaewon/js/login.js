let chang_img = (x) => setTimeout(()=>{
    let img = document.querySelectorAll('.chang_img');
    if(x === 0){
        img[2].classList.toggle('fade');
        x = 2
    }else{
        img[x].classList.toggle('fade');
    }
    chang_img(x-1)
},3000)

window.onload = () => {
    chang_img(2);

    const check_id = document.querySelector('#id_form');
    const check_pwd = document.querySelector('#pwd_form');

    check_id.addEventListener('keyup' ,(e)=>{
        const help_id = document.querySelector('#id_form span');
        const id_value = document.querySelector('#id');
        const help_id_status = help_id.classList.contains('move_helper');
        if(id_value.value != "" && !help_id_status){
            help_id.classList.toggle('move_helper');
            id_value.classList.toggle('move_input');
        }else if(id_value.value == "" && help_id_status){
            help_id.classList.toggle('move_helper');
            id_value.classList.toggle('move_input');
        }

        const pwd_value = document.querySelector('#pwd');
        let check_id = id_value.value.length >= 1 ? true : false;
        let check_pwd = pwd_value.value.length >= 6 ? true : false;
        let check_class = document.querySelector('.login_btn').classList;
        if( (check_id && check_pwd) && !check_class.contains('login_btn_active')){
            check_class.toggle('login_btn_active');
        }else if((!check_id || !check_pwd) && check_class.contains('login_btn_active')){
            check_class.toggle('login_btn_active');
        }
    });
    check_id.addEventListener('click',(e)=>{
        const id_value = document.querySelector('#id_form input');
        id_value.focus();
    });
    
    check_pwd.addEventListener('keyup' ,(e)=>{
        const help_id = document.querySelector('#pwd_form span');
        const pwd_value = document.querySelector('#pwd');
        const help_id_status = help_id.classList.contains('move_helper');
        if(pwd_value.value != "" && !help_id_status){
            help_id.classList.toggle('move_helper');
            pwd_value.classList.toggle('move_input');
        }else if(pwd_value.value == "" && help_id_status){
            help_id.classList.toggle('move_helper');
            pwd_value.classList.toggle('move_input');
        }
        const id_value = document.querySelector('#id');
        let check_id = id_value.value.length >= 1 ? true : false;
        let check_pwd = pwd_value.value.length >= 6 ? true : false;
        let check_class = document.querySelector('.login_btn').classList;
        if( (check_id && check_pwd) && !check_class.contains('login_btn_active')){
            check_class.toggle('login_btn_active');
        }else if((!check_id || !check_pwd) && check_class.contains('login_btn_active')){
            check_class.toggle('login_btn_active');
        }
    });
    check_pwd.addEventListener('click',(e)=>{
        const in_txt_box = document.querySelector('#pwd_form input');
        in_txt_box.focus();
    })


}

