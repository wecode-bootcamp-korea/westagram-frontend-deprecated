

const replyBtn = document.querySelector('.replyBtn');
const replyText = document.querySelector('.replyText');

replyText.addEventListener('keyup', function (event) {
    let textValue = replyText.value;
    console.log (event.target);
    if(textValue) {
      replyBtn.style.opacity = '1';
      replyBtn.style.cursor = 'pointer';
      return;
    } else {
      replyBtn.style.opacity = '0.3';
      return;
    }

    // 삼항연산자
    // textValue ? replyBtn.style.opacity = '1' : replyBtn.style.opacity = '0.3';
});


const replyList = document.querySelector('.replyUl');
const myIdSample = document.querySelector('.myId').innerHTML;

replyBtn.addEventListener('click',function() {
  console.log();
  let textValue = {
    name : myIdSample,
    msg : replyText.value
  };
  if (replyText.value) {
    let replyLi = document.createElement("li");
    replyList.appendChild(replyLi);
    replyLi.innerHTML = `<b>${textValue.name}</b>  ${textValue.msg} <img class="replyHeart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/> <button>∙∙∙</button>`;
  }
});


/*
const replyBtn = document.querySelector('.replyBtn');
const replyText = document.querySelector('.replyText');

function colorChange(event) {
    let btnValue = replyBtn.value.indexOf("@");
    console.log (event.target);
    if(idValue !== -1 && thisIsPw.value.length >= 6) {
        opacityAlert.style.opacity = '1';
        return;
    }
    else {
        opacityAlert.style.opacity = '0.3';
    }
}

thisIsId.addEventListener('keyup',colorChange);
thisIsPw.addEventListener('keyup',colorChange);
*/


/*
const replyUl = document.querySelector('.replyUl');

replyBtn.addEventListener('click',function() {
  console.log();
  let textValue = replyText.value;
  if (textValue) {
    document.createElement('li');
    replyUl.append(textValue);
  }
});
*/

/*
const a = document.querySelector('.replyUl');

replyBtn.addEventListener ('click', function() {
  console.log();
  document.createElement ('li');
  a.append('li');
})
*/