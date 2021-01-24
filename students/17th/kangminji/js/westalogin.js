const id = document.getElementById("id");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

password.addEventListener("keyup", function changcolor(event) {
  const idvalue = document.getElementById("id").value;
  const passwordvalue = document.getElementById("password").value;

  if (idvalue && passwordvalue) {
    btn.style.backgroundColor = "blue";
  } else {
    btn.style.backgroundColor = " rgb(185, 216,256)";
  }
});
id.addEventListener("keyup", function changcolor(event) {
  const idvalue = document.getElementById("id").value;
  const passwordvalue = document.getElementById("password").value;

  if (idvalue && passwordvalue) {
    btn.style.backgroundColor = "blue";
  } else {
    btn.style.backgroundColor = " rgb(185, 216,256)";
  }
});
btn.addEventListener("click", function validiation() {
  const idvalue = document.getElementById("id").value;
  const passwordvalue = document.getElementById("password").value;
  if (!idvalue.includes("@")) {
    alert("아이디가 올바르지 않습니다.");
  } else if (passwordvalue.length < 5) {
    alert("비밀번호는 5자리 이상입니다");
  } else {
    location.href = "instagram.html";
  }
});
