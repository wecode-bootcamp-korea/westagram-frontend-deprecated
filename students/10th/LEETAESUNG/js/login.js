const buttonChange = document.getElementsByClassName('inputBox')[0];

buttonChange.addEventListener('keyup', function() {
    const id = document.getElementsByClassName('idStyle')[0].value;
    const pw = document.getElementsByClassName('pwStyle')[0].value;
    const btn = document.getElementsByClassName('button')[0];

    if ((id.length > 1) && (pw.length > 1)) {
        btn.style.opacity = "1"
    } else if ((id.length === 0) || (pw.length === 0)) {
        btn.style.opacity = "0.4"
    }
});