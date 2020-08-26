const getVal = document.getElementsByTagName("form")[0];

const changeColor = () => {
  const idVal = document.querySelector(".writeID").value;
  const pwVal = document.querySelector(".writePW").value;
  const btn = document.querySelector("button");
  if (idVal && pwVal) {
    btn.style.backgroundColor = "rgb(0, 149, 246)";
  }
};

getVal.addEventListener("keyup", changeColor);

// 각 두 인풋에 이벤트를 걸려면 두 인풋을 포함하고 있는 컨테이너에 에게 걸면 된다.
