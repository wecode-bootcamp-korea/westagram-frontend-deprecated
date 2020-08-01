const textInput = document.querySelectorAll('.textInput');
const clickBtn = document.querySelectorAll('.button');
const lsLasts = document.querySelectorAll('.upload-exlist');
const lsLast = document.querySelector('.upload-exlist');

for (let i = 0; i < textInput.length; i++) {

    textInput[i].addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            console.log("e.preventDefault");

            let creLi = document.createElement("li");
            let creSpan = document.createElement("span");
            let creA = document.createElement("a");
            let creSpan2 = document.createElement("span");

            creLi.className = "upload-explain";
            creSpan.className = "post";
            creA.className = "likes";
            creSpan2.className = "post-link";

            creA.innerHTML = "강동원 ";
            creSpan2.innerHTML = textInput[i].value;

            creLi.appendChild(creSpan);
            creLi.appendChild(creA);
            creLi.appendChild(creSpan2);
            lsLasts[i].appendChild(creLi);
            textInput[i].value = "";
        }
    })
}

for (let i = 0; i < clickBtn.length; i++) {

    clickBtn[i].addEventListener("click", function (e) {

        e.preventDefault();
        console.log("e.preventDefault");

        let creLi = document.createElement("li");
        let creSpan = document.createElement("span");
        let creA = document.createElement("a");
        let creSpan2 = document.createElement("span");

        creLi.className = "upload-explain";
        creSpan.className = "post";
        creA.className = "likes";
        creSpan2.className = "post-link";

        creA.innerHTML = "강동원 ";
        creSpan2.innerHTML = textInput[i].value;

        creLi.appendChild(creSpan);
        creLi.appendChild(creA);
        creLi.appendChild(creSpan2);
        lsLasts[i].appendChild(creLi);
        textInput[i].value = "";
    })
}

// document.createElement("button").appendChild(lsLast);