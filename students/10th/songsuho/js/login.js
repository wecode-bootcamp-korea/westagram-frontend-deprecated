let info = document.getElementsByClassName('idInput')[0];
let pwd = document.getElementsByClassName('pwInput')[0];

console.log(info, pwd)
document.addEventListener('keyup',function(e) {
    if (info.value !== "" && pwd.value !== "") { 
            let color = document.getElementById('loginbtn');
            color.style.backgroundColor = 'blue';
        }
});

console.log('document')
// true && true => true