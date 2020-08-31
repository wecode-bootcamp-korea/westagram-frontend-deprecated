const loginInput = document.getElementsByClassName('login__input__text');
const loginButton = document.getElementsByTagName('button')[0];

// 로그인 버튼 활성화(+ 유효성 검사)
for (const el of loginInput){
    el.addEventListener('keyup', function(){
        ((loginInput[0].value.indexOf('@') !== -1) &&
        (loginInput[1].value.length > 4)) ?
        loginButton.style.backgroundColor = '#0095f6' :
        loginButton.style.backgroundColor = 'lightblue'
})}


// 하단 배너 이미지 링크(클릭이벤트)
const advertisementImage = document.querySelectorAll('.advertisement img');
advertisementImage[0].addEventListener('click', function(){
    newin = window.open('about:blank');
    newin.location.href='https://apps.apple.com/app/instagram/id389801252?vt=lo';
})
advertisementImage[1].addEventListener('click', function(){
    newin = window.open('about:blank');
    newin.location.href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DC13899FA-7527-4501-8B59-C857E8CB1A00%26utm_content%3Dlo%26utm_medium%3Dbadge';
})
