const btn = document.getElementById('btn')

document.getElementById('id').addEventListener('keyup', function() {
  const id = document.getElementById('id').value;
  const pw = document.getElementById('pw').value;
  if (id.length >= 1 && pw.length >= 1){
    btn.style.opacity = "1";
  } else{
    btn.style.opacity = "0.2";
  }
})

document.getElementById('pw').addEventListener('keyup', function() {
  const id = document.getElementById('id').value;
  const pw = document.getElementById('pw').value;
  if (id.length >= 1 && pw.length >= 1){
    btn.style.opacity = "1";
  } else{
    btn.style.opacity = "0.2";
  }
})