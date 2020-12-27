const thisId = document.getElementById('logId');
const thisIsPw = document.getElementById('logPassword');


thisIsPw.addEventListener('keyup', function(e) {
    if (thisId.value !== " ") {
        if (thisIsPw.value !== " ") {
            let btnColor = document.getElementsByClassName('loginBtn')[0];
            btnColor.style.backgroundColor = "#0095F6";
        }
    }
  });