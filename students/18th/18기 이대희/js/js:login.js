let idinput = document.querySelector('.id');
let pwinput = document.querySelector('.pw');
const btn = document.querySelector('.btn');

const changebtn = () =>{
    let idinputval = idinput.value;
    let pwinputval = pwinput.value;
    if(!idinputval || !pwinputval){
        btn.style.backgroundColor='rgb(192,223,253)';
    }
    else{
        btn.style.backgroundColor='blue';
    }
}

idinput.addEventListener('keyup', function(e){
    changebtn();
    }
)
pwinput.addEventListener('keyup', function(e){
    changebtn();
}
)
