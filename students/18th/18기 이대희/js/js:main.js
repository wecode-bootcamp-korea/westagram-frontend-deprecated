const ul = document.querySelector('.comments');
const inputBox = document.querySelector('.inputBox');
const weName = document.querySelector('.name').innerHTML.bold();
const heartIcon = document.querySelector('.heartIcon');
const iconBox = document.querySelector('.iconBox'); 
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
 
heartIcon.addEventListener('click', () => {   
        heartIcon.style.color==='red' ?(heartIcon.innerHTML='<i class="far fa-heart fa-2x"></i>', heartIcon.style.color='black') 
        :(heartIcon.innerHTML='<i class="fas fa-heart fa-2x"></i>', heartIcon.style.color='red')
});//게시글 좋아요

