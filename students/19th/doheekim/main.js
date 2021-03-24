const search = document.body.querySelector(".search-input");
const searchIcon = document.body.querySelector(".search-wrap > i");

search.addEventListener("keyup", function () {
    let resultSearch = search.value;
    console.log('search keyup function')

    if(resultSearch.length >= 1){
        searchIcon.hide();
    }else{
        searchIcon.show();
    }
});