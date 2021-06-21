"use strict";

const input = document.querySelector('.input');
const itemAdd = document.querySelector('.itemAdd');
const items = document.querySelector('.items');

const onAdd = () => {
  const text = input.value;
  if (input.value === '') {
    input.focus();
    return;
  }

  const item  = document.createElement('li');
  item.setAttribute('class', 'item');

  const itemText = document.createElement('span');
  itemText.setAttribute('class', 'itemText');
  itemText.innerHTML = "<b>dieter_rams</b>  " + text;

  const itemDel = document.createElement('button');
  itemDel.setAttribute('class', 'itemDel');
  itemDel.innerHTML = '<p class="minus"><i class="fas fa-eraser"></i></p>';
  itemDel.addEventListener('click', () => {
    items.removeChild(item);
  })

  item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);
    input.value = '';
    input.focus();
};

itemAdd.addEventListener('click', () => {
  onAdd();
})

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
  return;
})

//처음 시작하기 전에 구현해야할 기능 차례대로 정리한 다음 함수별로 나누기
//그리고 그 함수를 차례대로 구현하면서 console.log 찍어보면서 확인하기
