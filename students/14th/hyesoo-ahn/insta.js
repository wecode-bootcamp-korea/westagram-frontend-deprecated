// const thisIsButton = document.getElementById('btn');


// thisIsButton.addEventListener('keyup', function () {
//     const Name = document.getElementById('name').value;
//     const Pw = document.getElementById('pw').value;

//     if (Name && Pw) {
//         thisIsButton.style.backgroundColor = '#0095F6';
//         return;
//     }
// });




// const thisIsButton = document.getElementById('btn');
// const Name = document.getElementById('name');
// const Pw = document.getElementById('pw');

// if (Name.value !== '' && Pw.value !== '') {
//     function btn_on() {
//         thisIsButton.disabled = false;
//     }
//     return btn_on();
// }\


// id 1 이상, pw 6 이상  document.que('').value;
// querySelector('. #')로 선택해서 color keyup했을때 변경 

const Name = document.getElementById('name');
const Pw = document.getElementById('pw');
const Btn = document.getElementById('btn');



//     Name.addEventListener('keyup', function () {
//         if (Name.value.length >= 1) {
//             document.querySelector('#btn').style.backgroundColor = '#0095F6';
//         }
//     })
// Pw.addEventListener('keyup', function () {
//     if (Pw.value.length >= 6) {
//         document.querySelector('#btn').style.backgroundColor = '#0095F6';
//     }
// })

document.addEventListener('keyup', function () {
    Btn.style.backgroundColor = Name.value && Pw.value ? '#0095F6' : '#B7DFFC';
})
// Name과 Pw에서 각각 addEventListener 를 적용했는데, 2개의 input 창에서 모두 동작해야 하므로, document 자체에 addEventListener 걸기!⇒ document 전체를 추적하다가 이벤트 조건에 맞으면(Name.value && Pw.value) 이벤트 실행
// 삼항연산자 