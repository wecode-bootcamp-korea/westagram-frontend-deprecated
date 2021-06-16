


const mode = document.getElementsByClassName("text");//이게 문제인가
mode.addEventListener('keyup',changeColor);

//  console.log(changeColor); //함수제대로 전달 되었는지 어떻게 확인 ?
  function changeColor (e) {
    if (document.getElementById("login").value !== "" && document.getElementById("password").value!== "") {
       document.getElementById("button").style.backgroundColor = "skyblue";
    } else {
       document.getElementById("button").style.backgroundColor = "none";
    }
  };
