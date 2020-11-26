const inputForm = document.getElementsByTagName("form")[0];
const loginButton = document.getElementsByTagName("button")[0];
const validErrorMessageElement = document.getElementsByClassName("valid-check-message")[0];
// Validation 관련 모든 규칙을 클로저로 구현해보면 좋을 것 같다.

function activateLoginButton(){
  loginButton.style.backgroundColor = "#0395F6";
  loginButton.style.cursor = "pointer";
  loginButton.disabled = false;
}
function deactivateLoginButton(){
  loginButton.style.backgroundColor = "#C5E0FC";
  loginButton.style.cursor = "default";
  loginButton.disabled = true;
}
function showValidatingGuide(message, validErrorMessageElement){
  validErrorMessageElement.innerHTML = message;
  validErrorMessageElement.style.display = "block";
  loginButton.style.marginTop = 0;
}
function hideValidatingGuide(validErrorMessageElement){
  validErrorMessageElement.style.display = "none";
  loginButton.style.marginTop = "14px";
}

// 비밀번호 조건: 영어소문자, 영어대문자, 숫자, 특수문자 포함하며 8자리 이상
function checkPwValidation(pwToCheck, isValidId){
  const pwValidation = {
    regexUppercase: /[A-Z]/g,
    regexLowercase: /[a-z]/g,
    regexSpecialCharacter: /[\!\@\#\$\%\^\&\*]/g,
    regexDigit: /[0-9]/g,
  }
  const minPwLength = 8;
  const pwLength = pwToCheck.length;
  
  // password 'length' validation
  if(pwLength<minPwLength){
    if(isValidId && pwLength){
      showValidatingGuide("비밀번호는 8자리 이상입니다.", validErrorMessageElement);
    }
    return false;
  }else{
    // password 'is-including?' validation
    for(let validType in pwValidation){
      if(!pwToCheck.match(pwValidation[validType])){
        if(isValidId){
          showValidatingGuide(`비밀번호는 ${validType.slice(5)}(을)를 포함해야 합니다.`, validErrorMessageElement);
        }
        return false;
      }
    }
    if(isValidId){
      hideValidatingGuide(validErrorMessageElement);
    }
    return true;
  }

}
// 아이디는 이메일 형식으로 '문자열@문자열' 형태인지 확인
function checkIdValidation(idValue){
  const validIdRegExp = /\w\@\w/i;
  if(idValue.match(validIdRegExp)){
    return true;
  }else{
    return false;
  }
}

onInputChange = () => {
  const idValue = document.querySelector('input.id').value;
  const pwValue = document.querySelector('input.password').value;
  
  // validation process
  const isValidId = checkIdValidation(idValue);
  const isValidPw = checkPwValidation(pwValue, isValidId);
  

  if(isValidId && isValidPw){
    activateLoginButton();
  }else{
    deactivateLoginButton();
  }
  // if empty password input => hide guide message
  if(!pwValue) hideValidatingGuide(validErrorMessageElement);
}

main = () => {
  inputForm.addEventListener("input", onInputChange);
}
main();