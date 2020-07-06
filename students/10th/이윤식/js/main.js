const commnetButton = document.querySelector('.comment-button');
const comment = document.querySelector('.comment')
const commentControler = document.querySelector('.commnet-plus');

function addEnterComment(e) {
    if(event.keyCode == 13){
        let divtag = document.createElement('div')
        let divtag2 = document.createElement('div')
        let spantag1 = document.createElement('span')
        let spantag2 = document.createElement('span')
        let buttontag = document.createElement('button')
        divtag.classList = "classList_divtag"
        divtag2.classList = "classList_divtag2"
        spantag1.classList = "classList_spantag1"
        spantag2.classList = "classList_spantag2"
        buttontag.classList = "classList_buttontag"
        buttontag.innerHTML = "삭제"
        spantag1.innerHTML = "Wecode"
        spantag2.innerHTML = comment.value
        commentControler.appendChild(divtag)
        divtag.appendChild(divtag2)
        divtag2.appendChild(spantag1)
        divtag2.appendChild(spantag2)
        divtag.appendChild(buttontag)
        comment.value = ""

        buttontag.addEventListener('click',function() {
            divtag.parentNode.removeChild(divtag)
        });
    }
}
    function addClickComment(){
        let commnetDivtag = document.createElement('div')
        let commnetDivtag2 = document.createElement('div')
        let commnetSpantag1 = document.createElement('span')
        let commnetSpantag2 = document.createElement('span')
        let commnetButtontag = document.createElement('button')
        commnetDivtag.classList = "classList_divtag"
        commnetDivtag2.classList = "classList_divtag2"
        commnetSpantag1.classList = "classList_spantag1"
        commnetSpantag2.classList = "classList_spantag2"
        commnetButtontag.classList = "classList_buttontag"
        commnetButtontag.innerHTML = "삭제"
        commnetSpantag1.innerHTML = "Wecode"
        commnetSpantag2.innerHTML = comment.value
        commentControler.appendChild(commnetDivtag)
        commnetDivtag.appendChild(commnetDivtag2)
        commnetDivtag2.appendChild(commnetSpantag1)
        commnetDivtag2.appendChild(commnetSpantag2)
        commnetDivtag.appendChild(commnetButtontag)
        comment.value = ""
    }

comment.addEventListener('keyup', addEnterComment);
commnetButton.addEventListener('click', addClickComment);