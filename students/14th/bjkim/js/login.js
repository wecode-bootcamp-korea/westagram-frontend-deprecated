//solution 1

const userName = document.querySelector(".idkhan");
const userPw = document.querySelector(".pwkhan");
const logBtn = document.querySelector(".formbtn");

console.log(userName, "nn");
console.log(userPw, "nn");

document.addEventListener("keyup", function (event) {
  console.log(event.target.value);
  if (userName.value !== "") {
    if (userPw.value !== "") {
      let color = document.querySelector(".formbtn");
      console.log(color);
      color.style.backgroundColor = "#0095F6";
    }
  }
});

//addEventListner 가져오기,
//console.log("event triggered");

//input에 클래스 넣고 div 삭제
//css 다시 확인
//input value 확인

//const test = document.querySelector(".tt");?

/* 1 input 클래스 바꾸기
    2  쿼리셀렉인자 변경
    3 if 콘솔 확인  */

//     solution 2
// document.addEventListner("click", myFunction);
// function myFunction() {
//   if (userName.value > 0 && userPw.value > 0) {
//     return logBtn();

//     // color.style.btn.backgroundColor = "#0095F6";
//   }
//}
