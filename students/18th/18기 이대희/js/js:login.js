const idinput = document.querySelectorAll('.id');
const pwinput = document.querySelector('.pw');
const btn = document.querySelector('.btn');
const rightbox1 = document.querySelector('.rightBox1');

const changebtn = () =>{
    let idinputval = idinput.value;
    let pwinputval = pwinput.value;
//     if(!idinputval || !pwinputval){
//         btn.style.backgroundColor='rgb(192,223,253)';
//     }
//     else{
//         btn.style.backgroundColor='blue';
//     }
// }
const activeContion = !idInputVal || !pwinputval;
btn.style.background = activeContion ? 'rgb(192,1123,153)' :'blue';
}
let inputClick = idinput, pwinput;
idinput.addEventListener('keyup', function(e){
    changebtn();
    }
)
// pwinput.addEventListener('keyup', function(e){
//     changebtn();
// }
// )
