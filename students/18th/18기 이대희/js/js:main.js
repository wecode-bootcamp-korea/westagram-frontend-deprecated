const ul = document.querySelector('.comments');
const inputbox = document.querySelector('.inputbox');
const wename = document.querySelector('.name').innerHTML;
const article = document.querySelector('article');
const wenames = wename.bold(); 
// const heartx2_2 = document.querySelector('.heartx2_2');
let heartx2 = document.querySelector('.heartx2');
let delicon = document.querySelector('.heartx2');
const iconbox = document.querySelector('.iconbox'); 

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
        // console.log(inputbox.value);
        // if(inputbox.value===''){return;}
        //댓글 삭제
        btn.addEventListener('click', () =>{   
        makeul.remove();        
        })
        //댓글 좋아요
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
 

heartx2.addEventListener('click', (e) => {   
    
    // if(heartx2.id === 'ch1'){
        console.log('a342');
        heartx2.remove();
        let a = document.createElement('a');
        a.className="heartx2";
        a.id = 'ch2';
        iconbox.prepend(a)
        let p1 = document.createElement('i');
        p1.className="fas fa-heart fa-2x";
        p1.style.color='red';
        a.appendChild(p1);
        console.log(heartx2);
    // }
    // console.log(heartx2.id);
    // console.log()

    // if(heartx2.id === 'ch1'){
    //     let aa = document.createElement('a');
    //     aa.className="heartx2";
    //     aa.id='ch2';
    //     iconbox.prepend(aa);
    //     let p1 = document.createElement('i');
    //     p1.className="far fa-heart fa-2x";
    //     a.appendChild(p1);
    //     console.log('1');
    // }

});



