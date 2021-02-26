const ul = document.querySelector('.comments');
// const li = document.querySelectorAll('.comment2');
// const li2 = document.querySelectorAll('li');
const inputbox = document.querySelector('.inputbox');
const wename = document.querySelector('.name').innerHTML;
const article = document.querySelector('article');
const wenames = wename.bold(); 

inputbox.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {
        const btn = document.createElement('button');
        btn.className='textremove';
        let p = document.createElement('i');
        p.className='fas fa-ellipsis-h';
        btn.appendChild(p);
        
        const div_heart = document.createElement('div');
        div_heart.className='div_heart';
        const heart = document.createElement('i');
        heart.className='far fa-heart';
        div_heart.appendChild(heart);
       
        let makeul = document.createElement('li');
        makeul.className='comment';
        makeul.innerHTML=`${wenames} ${inputbox.value}`;
        makeul.appendChild(btn);
        makeul.appendChild(div_heart);
        ul.appendChild(makeul);
        console.log(makeul);

        inputbox.value = '';
        
        btn.addEventListener('click', () =>{   
        makeul.remove();        
        })
        div_heart.addEventListener('click', () =>{  
            
            if(div_heart.style.color==='red'){
                div_heart.style.color='rgb(219,219,219)';
            }else{
                div_heart.style.color='red';
            }
            console.log(div_heart.style.color);        
        })
    }

});
