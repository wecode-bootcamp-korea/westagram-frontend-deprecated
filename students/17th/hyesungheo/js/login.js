'use strict';


//ID -> PW 순으로 입력시 실행
const pwbox = document.getElementById('login_Pw');
pwbox.addEventListener('keyup',function(event){
    const idboxs = document.getElementById('login_Id').value;
    const pwboxs = document.getElementById('login_Pw').value;
    const change = document.getElementById('login_btn');

    if(idboxs&&pwboxs) {
        change.style.backgroundColor ='#0896F7';
      }else {
        change.style.backgroundColor ='#C0DFFD';
      }
});

//PW -> ID 순으로 입력시 실행
const idbox = document.getElementById('login_Id');
idbox.addEventListener('keyup',function(event){
    const idboxs = document.getElementById('login_Id').value;
    const pwboxs = document.getElementById('login_Pw').value;
    const change = document.getElementById('login_btn');

    if(idboxs&&pwboxs) {
        change.style.backgroundColor ='#0896F7';
      }else {
        change.style.backgroundColor ='#C0DFFD';
      }
});



