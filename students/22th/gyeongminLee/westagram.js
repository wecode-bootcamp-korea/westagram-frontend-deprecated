
//벨로그에 정리하기 


const mode = document.querySelector(".login-form");
//const mode = document.getElementsByClassName("login-form");
//두번쨰가 안되는 이유는???
mode.addEventListener('keyup', changeColor);

function changeColor (e) { 
 // console.log("asdfasd")
  let id = document.getElementById("id").value;
  let password=document.getElementById("password").value;
  let button = document.getElementById("loginButton");

  if (id !== "" && password !== ""&&id.length>5&&password.length>5) {
    // 공백 조건 지워도 될듯 
   //  if(document.getElementById("password").value!== ""){
    button.style.backgroundColor = "#0095F6";//그게 아니라 원래 색이 이래야하는듯 
    button.disabled=false;
   } else {
    button.style.backgroundColor = "#B2DFFC";
    button.disabled=true;
  }
};
// 댓글 추가 기능 










// mode.addEventListener('keyup',function (event) {
//     if (document.getElementById("login").value !== "") {
//       if(document.getElementById("password").value!== ""){
//        document.getElementById("button").style.backgroundColor = "skyblue";
//      }
//
//        document.getElementById("button").style.backgroundColor = "none";
//     }
//   }
// );
