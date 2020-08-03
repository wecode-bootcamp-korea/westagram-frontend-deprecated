const eventId = document.querySelector('#checkId');
const eventPsw = document.querySelector('#checkPsw');
const loginBtn = document.querySelector('#checkBtn');
    [eventId, eventPsw].forEach(item => {
        item.addEventListener('keyup', () => {
            const loginId = eventId.value;
            const loginPsw = eventPsw.value;
            if (loginId.length>=1 && loginPsw.length>=1) {
                loginBtn.removeAttribute("disabled");
                loginBtn.style.backgroundColor="rgb(0,149,246)";
            } else loginBtn.style.backgroundColor="rgba(0,149,246,.3)";
        });
    })