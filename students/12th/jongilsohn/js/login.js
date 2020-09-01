function handlekey() {
    const user_id = document.querySelector(".login_id").value
    const user_password = document.querySelector(".login_password").value
    const login_button = document.querySelector(".btn_change")
    if(user_id.length > 0){
        console.log(user_id.value)
        if(user_password.length != 0){
            login_button.classList.add('login_btn_change')
            login_button.classList.remove('login_btn')
        }
        else if(user_password.length === 0){
            login_button.classList.remove('login_btn_change')
            login_button.classList.add('login_btn')
        }
    }
}

function init(){
    document.addEventListener("keyup", handlekey);      //키이벤트 발생시 핸들키함수 호출
    img_change = setInterval(function() {             //3초에 한뻔씩 호출하는 함수
        let img_num = document.getElementsByClassName('phone_animation')
        const img_hide= "phone_img_hide"

        for (var i = 0; i < img_num.length; i++){
            if ( img_num[i].classList.length === 1) {
                if (img_num[i].nextElementSibling){
                    img_num[i].nextElementSibling.classList.remove(img_hide)
                    img_num[i].classList.add(img_hide)
                }
                else {
                    img_num[0].nextElementSibling.classList.remove(img_hide)
                    img_num[i].classList.add(img_hide)
                }
                return
            }
        }
     }, 3000);              //셋인터벌 3초로 지정
    }
init()

