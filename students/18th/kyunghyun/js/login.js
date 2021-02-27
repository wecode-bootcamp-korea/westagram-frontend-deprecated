const Btn = document.querySelector('.btn') // login 버튼
const id = document.getElementById('id'); //id 입력창
const password = document.getElementById('password'); //password 입력창


// btnOn의 콜백 함수 정의
function allClear() { //id, password 작성 조건 모두 갖추면 true, 하나라도 충족 안되면 false 
    if (id.value !== "" && password.value !== "" && password.value.length >= 6) { // [Q] !==와 != 등의 차이
        return true;
    } else {
        return false;
    }
}

// 이벤트 콜백 함수 정의
function btnOn(allClear) { 
    const check = allClear(); //함수를 변수에 담은 것. [Q] 그냥 함수를 쓰는 것과 함수를 변수에 담는 것이 어떤 차이를 가져오는지!
    const yes = () => Btn.style.opacity = "1"; //Arrow Function. 함수임!!
    const no = () => Btn.style.opacity = "0.3";
    return (check ? yes() : no()) // 삼항 조건 연산자가 리턴된다. / [Q] 왜 yes, no 함수 뒤에 () 붙여야 하는지??
}

//이벤트 등록
id.addEventListener("keyup", ()=>{ // 이벤트 종류들 파악하기. / 두 번째 인자에 바로 콜백함수(btnOn(allClear)) 넣어버리면 바로 실행된다.
    btnOn(allClear); 
});
password.addEventListener("keyup", ()=>{
    btnOn(allClear);
});



// addEventListener 안에 콜백 함수로 btnOn 들어있고
// btnOn 안에 콜백 함수로 allClear 들어있음. 