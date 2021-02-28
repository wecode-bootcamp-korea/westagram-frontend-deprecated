
addEventListener('keydown', function(){
    if(event.keyCode == 13){
    const input = document.querySelector('.string');
    const adidas = document.querySelector(".adidas");
    const p = document.createElement('p');
    p.innerHTML = `adidas: ${input.value}`;
    adidas.append(p);
    };
})
