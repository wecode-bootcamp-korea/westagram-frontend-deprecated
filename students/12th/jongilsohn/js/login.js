function handlekey() {
    const idValue = document.querySelector(".login_id").value
    const pwValue = document.querySelector(".login_password").value
    const loginBtn = document.querySelector(".btn_change")

    if(idValue && pwValue){
        loginBtn.classList.add('login_btn_change')
        loginBtn.classList.remove('login_btn')
        }
        else {
            loginBtn.classList.remove('login_btn_change')
            loginBtn.classList.add('login_btn')
        }
    }


function init(){
    document.addEventListener("keyup", handlekey);      //키이벤트 발생시 핸들키함수 호출
    
    imgChange = setInterval(function() {             //3초에 한뻔씩 호출하는 함수
        let imgNum = document.getElementsByClassName('phone_animation')
        const imgHide= "phone_img_hide"

        for (let i = 0; i < imgNum.length; i++){
            if ( imgNum[i].classList.length === 1) {
                if (imgNum[i].nextElementSibling){
                    imgNum[i].nextElementSibling.classList.remove(imgHide)
                    imgNum[i].classList.add(imgHide)
                }
                else {
                    imgNum[0].nextElementSibling.classList.remove(imgHide)
                    imgNum[i].classList.add(imgHide)
                }
                return
            }
        }
     }, 3000);              //셋인터벌 3초로 지정
    }
init()

