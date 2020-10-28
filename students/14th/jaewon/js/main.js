window.onload = () => {
    const write_btn = document.querySelector('.write_btn');
    write_btn.addEventListener('click', e => {
        cnt_write();
    });

    const cnt_area = document.querySelector('.cnt_area');
    cnt_area.addEventListener('keydown', e => {
        if(e.keyCode == 13 && cnt_area.value.length == 0 ) {
            e.preventDefault();
        }
    });
    cnt_area.addEventListener('keyup', e => {
        const login_btn = document.querySelector('.write_btn');
        if(e.keyCode == 13 ){
            cnt_write()            
        }else if(cnt_area.value.length > 0 && !login_btn.classList.contains('active')){
            login_btn.classList.toggle('active');
        }else if(cnt_area.value.length == 0 && login_btn.classList.contains('active')){
            login_btn.classList.toggle('active');
        }
    });
}

const cnt_write = () => {
     const login_btn = document.querySelector('.write_btn');
     if(login_btn.classList.contains('active')){
        const my_id = document.querySelector('#my_id').innerHTML;
        const input_txt = document.querySelector('.cnt_area');
        const list = document.querySelector('.cnt_coment_list ul');

        let li = document.createElement('li');
        li.innerHTML = "<div><h5>"+my_id+"</h5><span>"+input_txt.value+"</span></div>";
        list.appendChild(li);
        
        input_txt.value = '';
        login_btn.classList.toggle('active');
    }
}