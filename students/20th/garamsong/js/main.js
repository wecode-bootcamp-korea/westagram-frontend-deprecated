  const replyBar = document.querySelector(".replyBar");
  const postBtn = document.querySelector('.post');
  const typeBar = document.querySelector('.typeBar');
  const reply = document.querySelector('.reply')
  const replyList = document.querySelector('.replyValue')
  const userId = document.querySelector('.userId');
  const replyText = document.querySelector('replyText');


  replyBar.addEventListener('submit', addReply);

  function addReply(e){
      e.preventDefault();
      const newLi = document.createElement('li');
      newLi.className = "replyValue";
      const newId = document.createElement('span');
      newId.className = "userId";
      const newReply = document.createElement('p');
      newReply.className = document.createElement('replyText');
      const newLike = document.createElement('button');
      newLike.className = "like";
      const inputValue = document.querySelector('.typeBar');
      
      newLi.appendChild(newId);
      newId.innerHTML ="galmi.song";

      newLi.appendChild(newReply);
      newReply.innerText = inputValue.value;

      newLi.appendChild(newLike);
      newLike.innerHTML ="♡";

      reply.appendChild(newLi);
  }


