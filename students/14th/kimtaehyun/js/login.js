
const input = document.querySelectorAll('input');

// 삼항연산자를 이용해서 로그인 작동
// 삼항연산자를 어떻게 쓰지????히ㅣㅎ힣
// 조건을 어떻게 잡냐???히히히

input[0].addEventListener('keydown', () => {
    make_blue();
})

input[1].addEventListener('keydown', () => {
    make_blue();
})

function make_blue() {
    const button = document.querySelector('button');
    button.style.opacity = 1;
}