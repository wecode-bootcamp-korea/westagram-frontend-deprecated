
//벨로그에 정리하기 


const mode = document.querySelector(".login-form");
mode.addEventListener('keyup', changeColor);

function changeColor (e) {
 // console.log("asdfasd")
  const id = document.getElementById("id").value;
  const password=document.getElementById("password").value;
  const button = document.getElementById("loginButton");

  if (id !== "" && password !== "") {
   //  if(document.getElementById("password").value!== ""){
    button.style.backgroundColor = "skyblue";
   } else {
    button.style.backgroundColor = "none";
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
