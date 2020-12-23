const btnColor = () => {

    const inputForm = document.getElementsByClassName('westagram__input__group')[0];
    const inputID = document.getElementsByClassName('input--text')[0];
    const inputPW = document.getElementsByClassName('input--password')[0];
    const btn = document.getElementsByClassName('btn--primary')[0];
    
    (inputID.value && inputPW.value) ? (
        btn.disabled = false,
        btn.style.backgroundColor = '#5fbdf9'
    ) : (
        btn.disabled = true,
        btn.style.backgroundColor = '#B2DFFC'
    );

    inputForm.addEventListener('keyup', btnColor);
}

btnColor();