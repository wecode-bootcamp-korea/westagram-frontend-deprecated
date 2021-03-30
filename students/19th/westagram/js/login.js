const userId = document.querySelector(".login_id_input");
const userPw = document.querySelector(".login_pw_input");
const loginBtn = document.querySelector("button");
const container = document.querySelector('section');

// userId.addEventListener("keyup", handleInput);
// userPw.addEventListener("keyup", handleInput);
container.addEventListener("input", handleInput);


function handleInput() {
        const changeColor = userId.value.includes('@') && userPw.value.length >= 5;
    console.log('loginBtn keyup funtion');

    // changeColor ? (loginBtn.style.backgroundColor = "#0094f6")
    //     : (loginBtn.style.backgroundColor = "#0094f64b");
    loginBtn.style.backgroundColor = changeColor ? "#0094f6" : "#0094f64b";

}
