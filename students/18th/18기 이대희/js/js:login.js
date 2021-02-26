const idinput = document.querySelector('.id');
const pwinput = document.querySelector('.pw');
const btn = document.querySelector('.btn');
const rightbox1 = document.querySelector('.rightbox1');

const changebtn = () =>{
    let idinputval = idinput.value;
    let pwinputval = pwinput.value;
    if(!idinputval || !pwinputval){
        btn.style.backgroundColor='rgb(192,223,253)';
        console.log(btn.value);
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
