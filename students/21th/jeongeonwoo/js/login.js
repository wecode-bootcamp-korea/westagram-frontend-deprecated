const emailForm = document.querySelector('#email-input-box');
const passwordForm = document.querySelector('#password-input-box');
const loginButton = document.querySelector('#login-button');

//---------처음으로 한 방법--------------
//불린 함수를 이용해서 밸류값이 들어오면 true로 바꿔주면서 두 인풋박스가 true면 
//loginButton.disabled = false;를 반환한다. 밸류가 하나라도 비어있으면 알람이뜬다
//코드가 너무 길고 깔끔하지 않았다. 게다가 다시 돌아온 활성화 버튼이 비활성화로 돌아오지 않는다.

// let booleanCheckEmail = false;
// let booleanCheckLogin = false;

// const pushValue = () => {
//     emailForm.addEventListener('keyup', () => {
//         booleanCheckEmail = true;
//     })

//     passwordForm.addEventListener('keyup', () => {
//         booleanCheckLogin = true;
//         if (booleanCheckEmail && booleanCheckLogin) {
//             loginButton.disabled = false;
//         }
//     })

//     loginButton.addEventListener('click', () => {
//         if (!passwordForm.value || !emailForm.value) {
//             alert("아이디 또는 비밀번호를 다시 입력해주세요");
//         }
//     })
// }
// pushValue();

//---------두번째 방법--------------
//코드는 더 간단해졌지만 비밀번호 칸에 텍스트를 넣었다 빼면 적용이안된다.
//여러개의 요소를 한번에 잡고 이벤트리스너를 한번에 주고싶었다.

// emailForm.addEventListener('keyup', () => {
//     if (emailForm.value && passwordForm.value) {
//         loginButton.disabled = false;
//     } else loginButton.disabled = true;
// })


//----------최종 방법----------------
//검색결과 한개의 eventListener에 다중 이벤트를 부여해주는 방법을 알았다.
//훨씬 간결하고 깔끔하고 구현도 제일 완벽한거같다.
emailForm.addEventListener('keyup', listener);
passwordForm.addEventListener('keyup', listener);

function listener() {
    switch (!(emailForm.value && passwordForm.value)) {
        case true: loginButton.disabled = true; break;
        case false: loginButton.disabled = false; break;
    }
}

loginButton.addEventListener('click', () => {
    location.href = "index.html"
})