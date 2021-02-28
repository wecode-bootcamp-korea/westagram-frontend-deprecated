const ul = document.querySelector('.comments');
const inputBox = document.querySelector('.inputBox');
const weName = document.querySelector('.name').innerHTML.bold();
const article = document.querySelector('article');
let heartIcon = document.querySelector('.heartIcon');
let delIcon = document.querySelector('.heartx2');
const iconBox = document.querySelector('.iconBox'); 
const submitBtn = document.querySelector('.submitBtn');
const inputComment = document.querySelector('.inputComment');

inputComment.addEventListener('submit', (e) => {
        e.preventDefault();

        if(inputBox.value !==''){
        const btn = document.createElement('button');
        btn.className='textremove';
        const i = document.createElement('i');
        i.className='fas fa-ellipsis-h';
        btn.append(i);
        
        const makeDiv = document.createElement('div');
        makeDiv.className='divHeart';
        const heart = document.createElement('i');
        heart.className='far fa-heart';
        makeDiv.appendChild(heart);
       
        let makeli = document.createElement('li');
        makeli.innerHTML=`${weName} ${inputBox.value}`;
        makeli.append(btn,makeDiv);
        ul.append(makeli);

        inputBox.value = '';
        
        //댓글 삭제
        btn.addEventListener('click', () =>{   
            makeli.remove();        
        })
        
        //댓글 좋아요
        makeDiv.addEventListener('click', () =>{  
            makeDiv.style.color = makeDiv.style.color==='red' ? makeDiv.style.color='rgb(219,219,219)': makeDiv.style.color='red';   
        })
    }
})
 


heartIcon.addEventListener('click', (e) => {   
    
        heartIcon.remove();
        let a = document.createElement('a');
        a.className="heartIcon";
        iconBox.prepend(a)
        let i = document.createElement('i');
        i.className="fas fa-heart fa-2x";
        i.style.color='red';
        a.appendChild(i);
});

