const loginBtn = document.querySelector(".button");
const user = document.querySelector("#user");
const pw = document.querySelector("#password");

const hasData = () => {
  const userId = user.value;
  const userPw = pw.value; 
  if (userId.includes("@") && userPw.length >= 5) {
    loginBtn.classList.add("active");
  } else {
    loginBtn.classList.remove("active");
  }
} 
user.addEventListener('keyup', hasData);
pw.addEventListener('keyup', hasData);