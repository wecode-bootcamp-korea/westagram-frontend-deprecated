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
    let i = 0
    document.addEventListener("keyup", handlekey);      //키이벤트 발생시 핸들키함수 호출
    img_change = setInterval(function() {             //3초에 한뻔씩 호출하는 함수
        const img1 = document.querySelector(".phone_move1")
        const img2 = document.querySelector(".phone_move2")
        const img3 = document.querySelector(".phone_move3")
        const img4 = document.querySelector(".phone_move4")
        const img5 = document.querySelector(".phone_move5")
        if( i == 0 ) {              //첫번째 사진 출력
            img1.classList.add('phone_img_hide')
            img2.classList.remove('phone_img_hide')
            i += 1
        }
        else if (i == 1) {              //두번째 사진 출력
            img2.classList.add('phone_img_hide')
            img3.classList.remove('phone_img_hide')
            i += 1
        }
        else if (i == 2) {              //세번째 사진 출력
            img3.classList.add('phone_img_hide')
            img4.classList.remove('phone_img_hide')
            i += 1
        }
        else if (i == 3) {              //네번째 사진 출력
            img4.classList.add('phone_img_hide')
            img5.classList.remove('phone_img_hide')
            i += 1
        }
        else if ( i == 4) {              //다섯번째 사진 출력
            img5.classList.add('phone_img_hide')
            img1.classList.remove('phone_img_hide')
            i += 1
        }
        else {
            i=0
        }
     }, 3000, i);              //셋인터벌 3초로 지정
    }
init()
