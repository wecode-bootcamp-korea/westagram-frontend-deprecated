const textarea = document.querySelector("textarea");
textarea.addEventListener('input', changeColor);
function changeColor() {
    const replyUploadBtn = document.querySelector(".replyUploadBtn");
    const textareaVal = textarea.value;
    if(textareaVal) {
        replyUploadBtn.removeAttribute("disabled");
        replyUploadBtn.style.color="rgba(0,149,246,1)";
    } else replyUploadBtn.style.color="rgba(0,149,246,.3)";
}