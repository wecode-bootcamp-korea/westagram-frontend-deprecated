const eventId = document.querySelector('#checkId');
const eventPsw = document.querySelector('#checkPsw');
    [eventId, eventPsw].forEach(item => {
        item.addEventListener('keyup', () => {
            const loginId = document.querySelector('#checkId').value;
            const loginPsw = document.querySelector('#checkPsw').value;
            const loginBtn = document.querySelector('#checkBtn');
            if (loginId.length>=1 && loginPsw.length>=1) {
                loginBtn.removeAttribute("disabled");
                loginBtn.style.backgroundColor="rgba(0,149,246,1)";
            } else loginBtn.style.backgroundColor="rgba(0,149,246,.3)";
        });
    })