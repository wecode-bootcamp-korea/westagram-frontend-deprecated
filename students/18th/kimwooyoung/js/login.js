let txtwrite = document.getElementsByClassName('login_txt')[0];
let pwdwrite = document.getElementsByClassName('login_pwd')[0];
let btnclick = document.getElementsByClassName('login_btn')[0];

document.addEventListener('keyup', function(){
    if( txtwrite.value.length > 0 && pwdwrite.value.length >= 6 ){
      return btnclick.style.backgroundColor = "#0095F6";
    }
    else{
      return btnclick.style.backgroundColor = "#B2DFFC";
    }
  });