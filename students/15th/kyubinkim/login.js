const info = document.getElementById("info");
const pass = document.getElementById("pass");

document.addEventListener("keyup", function (e) {
  if (info.value !== "") {
    console.log(info.value);
    if (pass.value !== "") {
      console.log(pass.value);
      let changeColor = document.getElementById("button");
      changeColor.style.backgroundColor = "#0095F6";
    }
  }
});
