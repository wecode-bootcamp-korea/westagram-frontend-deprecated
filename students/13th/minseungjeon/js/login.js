const btn = document.querySelector('button');
const id = document.querySelector('#id');
const pw = document.querySelector('#pw');

id.addEventListener('keyup', loginCheckCondition);
pw.addEventListener('keyup', loginCheckCondition);

btn.addEventListener('click', loginCheck);


function loginCheckCondition(){
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






function loginCheck(){
    let idValue = id.value.length;
    let pwValue = pw.value.length;

    if(!id.value.includes('@')){
        id.focus();
        btn.disabled = true;
        btn.style.backgroundColor = '#0095F6';
        
        let errorMessage = document.querySelector('.error');
        let alertLine = document.createElement('span');
        alertLine.innerHTML = '에러가 났어요';
        alertLine.style.color = 'red';
        alertLine.style.fontSize = '2rem';
        errorMessage.appendChild(alertLine);
    }else if( pwValue < 5){
        alert('비밀번호 5글자 이상?');
        pw.focus();
        btn.disabled = true;
        btn.style.backgroundColor = '#0095F6';
    }else{
        btn.disabled = false;
        btn.style.backgroundColor = '#B2DFFC';
        let errorMessage = document.querySelector('.error');
        let alertLine = document.createElement('span');
        alertLine.innerHTML = '로그인 성공';
        alertLine.style.color = '#0095F6';
        alertLine.style.fontSize = '2rem';
        errorMessage.appendChild(alertLine);
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


