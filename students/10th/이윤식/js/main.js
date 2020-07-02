const thisIsButton = document.querySelector('.coment-button');
const comment = document.querySelector('.coment')
const comment_controler = document.querySelector('.commnet-plus');
const search = document.querySelector('.search')
const searchcontainer = document.querySelector('.search_contaner')

function commentHandler(e) {
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
        comment_controler.appendChild(divtag)
        divtag.appendChild(divtag2)
        divtag2.appendChild(spantag1)
        divtag2.appendChild(spantag2)
        divtag.appendChild(buttontag)

        buttontag.addEventListener('click',function() {
            divtag.parentNode.removeChild(divtag)
        });
    }
}
    function commnetlickHandler(){
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
        comment_controler.appendChild(commnetDivtag)
        commnetDivtag.appendChild(commnetDivtag2)
        commnetDivtag2.appendChild(commnetSpantag1)
        commnetDivtag2.appendChild(commnetSpantag2)
        commnetDivtag.appendChild(commnetButtontag)
        spantag2.innerHTML = ""
    }

    // function searchClickHandler(){
    //     let searchDivtag = document.createElement('div')
    //     let searchDivtag2 = document.createElement('div')
    //     let searchDivtag3 = document.createElement('div')
    //     let searchDivtag4 = document.createElement('div')
    //     let searchDivtag5 = document.createElement('div')
    //     let searchDivtag6 = document.createElement('div')

    //     searchDivtag.classList = "classSearch_divtag"
    //     searchDivtag2.classList = "classSearch_divtag2"
    //     searchDivtag3.classList = "classSearch_divtag3"
    //     searchDivtag4.classList = "classSearch_divtag4"
    //     searchDivtag5.classList = "classSearch_divtag5"
    //     searchDivtag6.classList = "classSearch_divtag6"

    //     searchcontainer.appendChild(searchDivtag)
    //     searchDivtag.appendChild(searchDivtag2)
    //     searchDivtag.appendChild(searchDivtag3)
    //     searchDivtag.appendChild(searchDivtag4)
    //     searchDivtag.appendChild(searchDivtag5)
    //     searchDivtag.appendChild(searchDivtag6)

    //     console.log(searchDivtag);
    // }

// search.addEventListener('keyup', )
comment.addEventListener('keyup', commentHandler);
thisIsButton.addEventListener('click', commnetclickHandler);
