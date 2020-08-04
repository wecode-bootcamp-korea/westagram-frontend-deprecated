const idButtonValue = document.getElementsByClassName('input11').value
const pwButtonValue = document.getElementsByClassName('input22').value

idButton.addEventListner('onkeypress', function(){
    if ( idButtonValue.length >= 1 && pwButtonValue.length >=1  ) { 
        return;
    }
  const result = document.getElementsByClassName('loginbutton').style.backgroundColor = #0095f6;
  return result;
})
