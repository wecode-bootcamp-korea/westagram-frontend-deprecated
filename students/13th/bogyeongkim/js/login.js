const lgBtn=document.getElementById('logBtn');
const idBtn=document.getElementById('phoneID');
const psBtn=document.getElementById('psWord');

lgBtn.addEventListener("mousedown",function(){
   const username = idBtn.value;
   const password = psBtn.value;
   if(username.length > 4 && password.length > 6){
      lgBtn.style.backgroundColor="#0095f6";
   }
});
   