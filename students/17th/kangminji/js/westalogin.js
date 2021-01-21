const id =document.getElementById('id');
const password = document.getElementById("password");
const btn = document.getElementById('btn');

password.addEventListener('keyup', function changcolor(event){

const idvalue = document.getElementById('id').value;
const passwordvalue = document.getElementById('password').value;



if(idvalue&&passwordvalue){
btn.style.backgroundColor =  'blue';

}else {
    btn.style.backgroundColor = ' rgb(185, 216,256)';
}



});

id.addEventListener('keyup', function changcolor(event){

    const idvalue = document.getElementById('id').value;
    const passwordvalue = document.getElementById('password').value;
    
    
    
    if(idvalue&&passwordvalue){
    btn.style.backgroundColor =  'blue';
    
    }else {
        btn.style.backgroundColor = ' rgb(185, 216,256)';
    }
    
    
    
    });