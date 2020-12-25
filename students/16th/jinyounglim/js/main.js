const btnTxtAll = document.querySelector('.btn_txt_all');
const feedTxt = document.querySelector('.feeds_txt p');

btnTxtAll.addEventListener('click', txtShow = () => {
    feedTxt.classList.add('all');
    btnTxtAll.remove();
});

const likes = document.querySelectorAll('.btn_heart');

for(const like of likes){ 
    like.addEventListener('click', function(){
        this.classList.toggle('on');
    });
}

const cmBox = document.querySelector('.comments_list');
const cmInput = document.querySelector('.comments_write input');
const cmBtn = document.querySelector('.btn_comment');

cmBtn.addEventListener('click', cmPut = (e) => {
    e.preventDefault();

    const cm = document.createElement('li');
    const cmTxt = document.createElement('p');
    const id = document.createElement('strong');

    const cmHeart = document.createElement('button');
    cmHeart.className ='btn_heart btn_small btn_com';
    id.className = 'user_id';

    cmTxt.innerHTML = cmInput.value;
    id.innerHTML = 'delheure29';
    
    if(cmInput.value){
        cmBox.appendChild(cm);
        cm.appendChild(id);
        cm.appendChild(cmTxt);
        cm.appendChild(cmHeart);     
        cmInput.value = "";
    }
});



