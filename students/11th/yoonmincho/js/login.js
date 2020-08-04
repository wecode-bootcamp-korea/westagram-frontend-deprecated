const id = document.getElementsByClassName('input11')[0]
const pwd = document.getElementsByClassName('input22')[0]
const button = document.getElementsByClassName('loginbutton')[0]

id.addEventListener('keyup',function(){
  if( id.value && pwd.value ) { 
    button.style.backgroundColor = '#0095f6';
    console.log('hello');
  }
  else {
    button.style.backgroundColor = 'rgba(0,149,246,.3)';
  }
})

pwd.addEventListener('keyup',function(){
  if( id.value && pwd.value ) { 
    button.style.backgroundColor = '#0095f6';
    console.log('hi');
  }
  else {
    button.style.backgroundColor = 'rgba(0,149,246,.3)';
  }
})                        


