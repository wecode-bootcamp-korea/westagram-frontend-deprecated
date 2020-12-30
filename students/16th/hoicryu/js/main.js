const myId = '16기 정재윤 '
const input = document.getElementById('input_feed')
const btn = document.getElementById('btn_comment')

btn.addEventListener('click', function() {
  const list = document.getElementById('feed_list')
  const value = document.getElementById('input_feed').value
  const li = document.createElement('li')
  li.className = 'item_comment'
  li.innerHTML = '<span class="comment_id">' + myId + '</span><span class="comment_desc">' + value +'</span>'
  list.appendChild(li)
  input.value = ''
})

input.addEventListener('keyup', function(e) {
  const list = document.getElementById('feed_list')
  const value = document.getElementById('input_feed').value
  const li = document.createElement('li')
  li.className = 'item_comment'
  li.innerHTML = '<span class="comment_id">' + myId + '</span><span class="comment_desc">' + value +'</span>'
  
  if (e.keyCode == 13 && value !== "") {
    list.appendChild(li)
    input.value = ''
  }
})