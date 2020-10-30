const Name = document.getElementById('name');
const Pw = document.getElementById('pw');
const Btn = document.getElementById('btn');
// selector로 클래스값에 접근하고 변수에 담기

document.addEventListener('keyup', function () {
    Btn.style.backgroundColor = Name.value && Pw.value ? '#0095F6' : '#B7DFFC';
})
// Name과 Pw에서 각각 addEventListener 를 적용했는데,
// 2개의 input 창에서 모두 동작해야 하므로, document 자체에 addEventListener 걸기!
// ⇒ document 전체를 추적하다가 이벤트 조건에 맞으면(Name.value && Pw.value 삼항연산자 사용) 
// 이벤트 실행