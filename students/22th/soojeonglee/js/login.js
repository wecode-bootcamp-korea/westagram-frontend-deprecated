'use strict';

addEventListener( 'keyup', () => {
  const loginId = document.getElementById('loginId').value; // 최초 코드에는 value값을 받지 않았었다...! ㅇㅂㅇ // const 쓰는 이유 : 재선언, 재할당 필요없음
  const loginPw = document.getElementById('loginPw').value; // 최초 코드에는 value값을 받지 않았었다...! ㅇㅂㅇ // const 쓰는 이유 : 재선언, 재할당 필요없음
  const loginBtn = document.getElementsByClassName('loginBtn')[0]; // // const 쓰는 이유 : 재선언, 재할당 필요없음


  // let loginBtnColor = loginBtn.style.backgroundColor; // if 조건문에서 다른 값으로 재할당 가능하기때문에 만약 사용가능하다면? let을 쓰는게 맞는거같다..!
  // return (loginId !=="") && (loginPw !=="") ? loginBtnColor = "#0096f6" : loginBtnColor = "#C0DFFD"; 
  // 아래 조건문에서 loginBtn.style.backgroundColor가 너무 긴 불필요한 변수인거같아서 ⬆️와 같이 변수로 선언해서 적용하려고했는데 적용되지 않았다.
  // 왜 그런지 멘토님께 확인해보니 style.backgroundColor은 오브젝트형태로 구성된 것이었다.
  // // {
  //   style : {
  //     backgroundColor : 'blue';
  //   }
  // }
  // 처럼 말이다 ! 그래서 loginBtn.style.backgroundColor를 변수 선언하니까 loginBtn.style.backgroundColor 자체가 스트링으로 변환되서 적용이 안되었던것이다.
  // 이건 오브젝트인데 ...! 그래서 만일 코드를 줄여서 사용하고 싶다면, loginBtn.style를 변수 선언해야한다.
  // 그리고 나는 재선언을 해야한다고 생각해서 let 키워드를 사용했는데, 변하지 않는 값이고, 재선언 재할당의 이유가 없으니 const를 사용하는 것이 맞다고 한다.
  
  
  const loginBtnColor = loginBtn.style;
  return (loginId !=="") && (loginPw !=="") ? loginBtnColor.backgroundColor = "#0096f6" : loginBtnColor.backgroundColor = "#C0DFFD"; 
  
  // 반복디는 코드 loginBtn.style.backgroundColor; 를 줄이고 싶은데 어떤 변수로 선언해도 적용이 되지 않는다. 왜그럴까? 

  // if ((loginId !=="") && (loginPw !=="")) { // undefined, nan, "" 값은 false를 가지지만 그 값을이 같은건 아니다. 즉 "" 이 0 은 아니다.
  //   loginBtn.style.backgroundColor = "#0096f6";
  // } else {
  //   loginBtn.style.backgroundColor = "#C0DFFD";
  // } // 삼항 연산자로 바꾸기 전의 식

  // // 현재 다시 input value를 없앴을 때, 값이 바뀌지 않는다. 이건 조건이 다시 반복되어야할거같은데 이땐 어떤 구문을 써야할까? 
  // // 아마 if 값을 충족시켜서 return을 해버려서 다시 값이 바뀌어도 변함이 없는것같다. for을 써야하나 ? 근데 그러기엔 변수를 돌 필요는 없는데
  // // 값이 바뀌는 것만 감지해서 버튼 컬러를 바꿔줄수 없을까?

  // 이거 다 => ㅎㅎ 오타 때문에 안된거였음 ㅋㅎ

  // // if 문도 삼항 조건 연산자로 바꿔주기
  // 참고
  // var func1 = function( .. ) {
  //   if (condition1) { return value1 }
  //   else { return value2 }
  // }
  
  // var func2 = function( .. ) {
  //   return condition1 ? value1 : value2
  // }
});
