/* <goal> 1.
    id, pw 에 각각 한 글자 이상 써야 버튼이 활성화 되도록 해주세요.
    원래 연한 파란색이었다가 -> 활성화 되면 파란색으로!
*/

// const userInput = document.querySelectorAll("input");
const userID = document.querySelector("#ID");
const userPass = document.querySelector("#PASS");

function login(event) {
    // input ID, PASSWORD 입력 칸 value 값 가져오기
    const idValue = userID.value;
    const passValue = userPass.value;

    // button tag 가져오기
    const btn = document.querySelector("#BTN");

    // 입력시 input style도 변한다.
    userID.style.color = "#262626";
    userPass.style.color = "#262626";

    // 조건식 만들기 : 입력 칸에 한글자 이상 써야 버튼 태그를 활성화하는 식
    if (idValue.length >= 1 && passValue.length >= 1) {
        // id(pass) Value 값의 length 길이가 1과 같거나 더 크면
        // button의 비활성화(true)가 활성화(false)가 된다.
        btn.disabled = false;

        // 버튼의 style도 변한다.
        btn.style.backgroundColor = "#4795F6";
        // btn.style.color = "#262626";
        btn.style.cursor = "pointer";
    }
};

userID.addEventListener("input", login);
userPass.addEventListener("input", login);

