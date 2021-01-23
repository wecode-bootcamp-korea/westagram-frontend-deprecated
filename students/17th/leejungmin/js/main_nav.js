const navProfileBtn = document.querySelector('.nav_bar_profile_btn'),
    navMenuDrop = document.querySelector('.drop_box_main'),
    navMenuDropDia = document.querySelector('.drop_box_diamond');

let dropDownUp = 0;


// 네비바 프로필 드랍바메뉴

function menuDrop() {
    if(dropDownUp === 0) {
        navMenuDrop.style.display = 'block';
        navMenuDropDia.style.display = 'block';
        dropDownUp = 1;
    }else if(dropDownUp === 1){
        navMenuDrop.style.display = 'none';
        navMenuDropDia.style.display = 'none';
        dropDownUp = 0;
    }
}

navProfileBtn.addEventListener('click', menuDrop);