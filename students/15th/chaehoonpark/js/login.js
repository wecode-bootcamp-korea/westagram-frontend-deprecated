// 로그인 페이지 js 파일 예정

// 로그인 버튼 활성화 컬러 : #0095F6
const thisIsButton = document.getElementsByTagName("button")[0];
const thisIsPassword = document.getElementById("Password");
const thisIsId = document.querySelector("#ID");
const thisIsInputBox = document.querySelector(".input_and_button_box");

// thisIsButton.addEventListener('keyup',function(){
//     let thisIsId = document.getElementById('ID');
//     let thisIsPassword = document.getElementById('Password');

//     if((thisIsId.length === 1) && (thisIsPassword.length === 6)){
//         thisIsButton.style.color = "#0095F6";
// }});
// 이 코드가 안 됐던 이유는 button 에다가 event 를 걸었기 때문이다. event 가 일어나는 곳은 ID, PASSWORD인데

thisIsInputBox.addEventListener("keyup", function () {
  // if(event.target.value){
  //     thisIsButton.style.backgroundColor = "#0095F6";
  // }else{
  //     thisIsButton.style.backgroundColor = "#B2DFFC";
  // }
  const thisIsIdValue = thisIsId.value;
  const thisIsPasswordValue = thisIsPassword.value;
//   if (thisIsIdValue && thisIsPasswordValue) {
//     thisIsButton.style.backgroundColor = "#0095F6";
//   } else {
//     thisIsButton.style.backgroundColor = "#B2DFFC";
//   }

  // if(thisIsIdValue.length !== 0 && thisIsPasswordValue.length !== 0){
  //     thisIsButton.style.backgroundColor = "#0095F6";
  // }else{
  //     thisIsButton.style.backgroundColor = "#B2DFFC";
  // }

  !!(thisIsIdValue && thisIsPasswordValue) ? (thisIsButton.style.backgroundColor = "#0095F6")
  : (thisIsButton.style.backgroundColor = "#B2DFFC");
});

// thisIsPassword.addEventListener('keydown', function(){
//     let thisIsPassword = document.getElementById('Password');
//     let thisIsId = document.getElementById('ID');
//     if(thisIsId.length >=1 && thisIsPassword.length >= 1){
//         thisIsButton.style.backgroundColor = "#0095F6";
//     }else{
//         thisIsButton.style.backgroundColor = "#B2DFFC";
//     }
// })

//로그인 버튼 활성화 조건 : 걍 아이디 패스워드 둘다 최소 한 개만 들어가면 됨으로 해 그냥...
