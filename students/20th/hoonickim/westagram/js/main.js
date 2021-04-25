const text = document.querySelector(".text");
const button = document.querySelector("button");

function activate() {
    if(text.value) {
      button.disabled = false;
      button.style.color = "#0095f6";
      button.style.cursor = "pointer";
    }
    else{
      button.style.color = "#B2DFFC";
      button.style.cursor = "defult"
        }
};

text.addEventListener('input', activate);
