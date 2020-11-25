const info = document.getElementById("info");
const pass = document.getElementById("pass");

document.addEventListener("keyup", function () {
  //info 빈칸 이나 @ 포함
  if (info.value !== "" && info.value.match("@")) {
    //pass 5자 이상
    if (pass.value.length >= 5) {
      let changeColor = document.getElementById("button");
      changeColor.style.backgroundColor = "#0095F6";
    }
  }
});
