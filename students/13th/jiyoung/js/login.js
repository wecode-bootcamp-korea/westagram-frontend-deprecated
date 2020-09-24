const idd = document.getElementById('btn1');
const pw = document.getElementById('btn2');
const bttn =document.getElementById('btn3');

function activateBtn(){
   
    if(idd.value.includes("@") && pw.value.length>5) {

       bttn.style.backgroundColor="#bbe0fc";
       
    } else {

        bttn.style.backgroundColor="grey";
    }

}

    idd.addEventListener('keyup', activateBtn);
    pw.addEventListener('keyup', activateBtn);
  