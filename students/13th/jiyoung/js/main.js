const commment = document.getElementById("cmtinput");

const id = document.querySelector("#myid").innerText;


function addComment(e) {

    if (e.keyCode === 13) {

        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let createDiv = document.createElement('div');
        let bttn = document.createElement('button')
        const comments = document.querySelector(".comments");
        const content = commment.value;
        createDiv.appendChild(span1);
        createDiv.appendChild(span2);
        createDiv.appendChild(bttn);
        createDiv.classname = "line4"
        bttn.className = "deleteBtn"
        span1.innerHTML = id;
        span2.innerHTML = " " + content;
        bttn.innerHTML = "delete";
        createDiv.firstChild = id;
        createDiv.firstChild.className = "bold";
        comments.appendChild(createDiv);


        bttn.addEventListener('click', () => {
            const btn2 = bttn.parentNode;
            /*const parent = btn2.parentNode;*/

            comments.removeChild(btn2);
        });
    }
}

commment.addEventListener('keyup', (e) => {
    addComment(e)
});



let search = document.querySelector("#검색");
let searchbar = document.querySelector(".검색");


function extendSearchbar(e) {



    if (search.value.includes("we"))

    {
        let span = document.createElement('span');
        let div = document.createElement('div');
        div.appendChild(span);
        div.className = "wecode";
        span.className = "wecode_bootcamp";
        span.innerHTML = "Wecode_bootcamp";
        searchbar.appendChild(div);
    }
    return;
}

search.addEventListener('keyup', (e) => extendSearchbar(e))