const login_id = document.getElementById('login_id');
const login_pw = document.getElementById('login_pw');
const login_btn = document.getElementsByClassName('login_btn')[0];
const view_password = document.getElementsByClassName('view_password')[0];
const login_id_span = document.getElementsByClassName('login_id_span')[0];
const login_pw_span = document.getElementsByClassName('login_pw_span')[0];



login_id.addEventListener("input", inputEvent);
login_pw.addEventListener("input", inputEvent);
login_btn.addEventListener("mousedown", loginBtnMouseDown);
login_btn.addEventListener("mouseup", loginBtnMouseUp);
view_password.addEventListener("click", viewPasswordClick);


function inputEvent() {
    if (login_id.value.length > 0) {
        const styleObj = {
            transition: "0.1s",
            paddingTop: "2px",
            paddingLeft: "5px",
            fontSize: "10px"
        }

        changeStyle(login_id_span, styleObj);
    }
    else{
        const styleObj = {
            transition: "0.1s",
            paddingTop: "12px",
            paddingLeft: "9px",
            fontSize: "12px"
        }

        changeStyle(login_id_span, styleObj);
    }

    if (login_pw.value.length > 0) {
        const styleObj = {
            transition: "0.1s",
            paddingTop: "2px",
            paddingLeft: "5px",
            fontSize: "10px"
        }

        changeStyle(login_pw_span, styleObj);
    }
    else{
        const styleObj = {
            transition: "0.1s",
            paddingTop: "12px",
            paddingLeft: "9px",
            fontSize: "12px"
        }

        changeStyle(login_pw_span, styleObj);
    }


    login_id.value.length >= 1 && login_pw.value.length >= 5 ? disabledLoginBtn(login_btn, false, "#0095F6") : disabledLoginBtn(login_btn, true, "#B2DFFC");

    login_pw.value.length >= 1 ? changeStyle(view_password, {display: "block"}) : changeStyle(view_password, {display: "none"})
}

function loginBtnMouseDown() {
    changeStyle(login_btn, {backgroundColor: "#67c2ff"});
}

function loginBtnMouseUp() {
    changeStyle(login_btn, {backgroundColor: "#0095F6"});
}

function viewPasswordClick() {
    if (login_pw.type == "password"){ 
        login_pw.type = "text";
        view_password.innerHTML = "숨기기";
        changeStyle(view_password, {marginLeft: "250px"})
    }
    else{ 
        login_pw.type = "password";
        view_password.innerHTML = "비밀번호 표시";
        changeStyle(view_password, {marginLeft: "200px"})
    }
}


function disabledLoginBtn(dom, disabled, backgroundColor) {
    dom.disabled = disabled;
    changeStyle(dom, {backgroundColor});
}


function changeStyle(dom, styleObj) {
    for (key in styleObj) {
        dom.style[key] = styleObj[key];
    }
}

