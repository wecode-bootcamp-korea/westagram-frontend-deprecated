const btn = document.querySelector('button');
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');

id.addEventListener('keyup', x);
pw.addEventListener('keyup', x);

btn.addEventListener('click', y);


function x(){
    let a = id.value.length;
    let b = pw.value.length;

    if(a>=6 && b>=6){
        btn.disabled = false;
        btn.style.backgroundColor = '#0095F6';
    }else{
        btn.disabled = true;
        btn.style.backgroundColor = '#B2DFFC';
    }
}






function y(){
    let a = id.value.length;
    let b = pw.value.length;

    if(!id.value.includes('@')){
        id.focus();
        btn.disabled = true;
        btn.style.backgroundColor = '#0095F6';
        // alert('이메일 형식(@) 확인');
        let e = document.querySelector('.error');
        let f = document.createElement('span');
        f.innerHTML = '에러가 났어요';
        f.style.color = 'red';
        f.style.fontSize = '2rem';
        e.appendChild(f);
    }else if( b < 5){
        alert('비밀번호 5글자 이상?');
        pw.focus();
        btn.disabled = true;
        btn.style.backgroundColor = '#0095F6';
    }else{
        btn.disabled = false;
        btn.style.backgroundColor = '#B2DFFC';
        let e = document.querySelector('.error');
        let f = document.createElement('span');
        f.innerHTML = '로그인 성공';
        f.style.color = '#0095F6';
        f.style.fontSize = '2rem';
        e.appendChild(f);
    }   
}
    

// }

// const c = id.value;
// const d = pw.value;

// if(!c.includes('@')){
//     alert('이메일이 잘못 되었으니 @ 써라');
//     id.focus();
//     btn.disabled = true;
// }

// if(d<5){
//     alert('비밀번호는 5글자 이상!!!');
//     pw.focus();
//     btn.disabled = true;
// }

