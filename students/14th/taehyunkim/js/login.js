// 키다운 이벤트 사용
// id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
// 왜 id만 입력할때만 적용되냐? 비밀번호는 왜 안됨?

let input_id = document.querySelector('.input_id');
let input_pass = document.querySelector('.input_pass');

// 클래스 하나, 하나 나눠서 이벤트를 줄까? => 주니까 잘됨 굿
input_id.addEventListener('keydown', () => {
    let button = document.querySelector('button');
    button.style.opacity = 1;
})

input_pass.addEventListener('keydown', () => {
    let button = document.querySelector('button');
    button.style.opacity = 1;
})
