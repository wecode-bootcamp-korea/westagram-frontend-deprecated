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
let resultbox = document.querySelector(".resultbox");



function match(el) {
    const userID = search.value;
    console.log(el.indexOf(userID));
    return el.indexOf(userID) !== -1;
}


function showid(id) {

    let list = document.createElement('li');
    list.className = "showinglist"
    list.innerHTML = `<img class="imgprofile" src=${id.picture} alt="${id.id}님의 프사">
        <div class="profile"> <span class=showedid> ${id.id}</span> <span class=showednickname> ${id.nickname}</span></div>`
    resultbox.appendChild(list);

}


const Arr = [{
        id: "Wecode_bootcamp",
        nickname: ">wecode",
        picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=AvzZNh0xPhsAX8Vnzmb&oh=12acc133a54f49303cad6b8cc90d0efa&oe=5F9A8AF0"
    },
    {
        id: "Nomad-coder",
        nickname: "nicolas",
        picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/71531286_3085712644832024_2029702609517936640_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=N4EIqPFRFOUAX8kVvcU&oh=c8c1e8a4c388255e12ddba800313cb4a&oe=5F9AAF21 "
    },
    {
        id: "Dream-coding",
        nickname: "ellie",
        picture: "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/100694284_273351517127496_4089619420610035712_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=QqthWo_UJzgAX-kP-2W&oh=41b597764dafef4bd7b73bbd83ac768b&oe=5F9B6178"
    }

]



search.addEventListener('keyup', function () {

    let a = document.querySelectorAll(".showinglist")
    a.forEach((el) => {
        console.log(el);
        el.remove()
    })
    console.log("a");
    let filteredArray = Arr.filter(x => match(x.id));
    resultbox.style.display = "block";
    if (filteredArray) {
        filteredArray.forEach((e) => {
            console.log(e.id)
            showid(e)
        })
    }
})

search.addEventListener('focusout', function () {
    resultbox.style.display = "none";
})



//clickprofile


let profileIcon=document.querySelector("#profileicon");
console.log(profileIcon);
let profileBox=document.querySelector(".profilebox");


profileIcon.addEventListener('click',()=>{profileBox.style.visibility="visible"
});

profileIcon.addEventListener('dblclick',()=>{profileBox.style.visibility="hidden"
});