// 로그인시 버튼 활성화 기능
// 인풋에 밸류가 있을 없을경우 버튼 비활성 상태 > 인풋 밸류 발생 시 버튼 활성화
// 비활성 상태 컬러값주고 > 활성 시 버튼 컬러값 변경
// input에 값이 없을땐 default값
// input에 값이 있을땐 button의 backgroundcolor 바꿔주기

// const loginButton = document.getElementsByClassName('loginBtn')[0];

// if (두개의 input의 value가 있다면 ){버튼이 활성화 되고 버튼의 색상을 변경해주기}
// else(){버튼의 색상은 default값}

//input태그를 자바스크립트로 선택 
//input에 값이 입력되었을때의 코드
const loginId = document.getElementsByClassName('loginId')[0];
const loginPw = document.getElementsByClassName('loginInput')[0];
const loginBtn = document.getElementsByClassName('loginBtn')[0];
console.log()
// 
loginId.addEventListener('keyup', function(){
    if(loginId.value.length > 0 && loginPw.value.length > 0){
        
        loginBtn.style.backgroundColor = "#0095f6";
    }

    })

loginPw.addEventListener('keyup', function(){
        if(loginId.value.length > 0 && loginPw.value.length > 0){
            loginBtn.style.backgroundColor = "#0095f6";
        }
    
        })

