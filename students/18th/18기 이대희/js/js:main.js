const ul = document.querySelector('.comments');
// const li = document.querySelectorAll('.comment2');
// const li2 = document.querySelectorAll('li');
const inputbox = document.querySelector('.inputbox');
const wename = document.querySelector('.name').innerHTML;
const article = document.querySelector('article');
const wenames = wename.bold(); 

let a = 1;
inputbox.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') {
        const btn = document.createElement('button');
        btn.innerHTML = 'X';

        let aa = document.querySelector('.comment'+a);
        let makeul = document.createElement('li');
        makeul.className='comment'+a;
        makeul.innerHTML=`${wenames} ${inputbox.value}`;
        makeul.appendChild(btn);
        ul.appendChild(makeul);
        console.log(makeul);
        a++;

        btn.addEventListener('click', () =>{   
            makeul.remove()
           
        }
        )
    }

});

// btn.addEventListener('click', () =>{
//     // a++;
//     ul2.parentNode.removeChild(ul2);
//     // console.log(ul2.a);

//     console.log(ul2);
// })

// console.log(document.createElement('a',asd));