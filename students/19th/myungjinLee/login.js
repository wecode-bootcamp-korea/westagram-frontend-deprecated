let input = document.querySelector("input");
let id = document.getElementsByClassName("id")[0];
let password = document.querySelector(".passward");
let color = document.querySelector('button');

id.addEventListener('keyup',button);
password.addEventListener('keydown',button);

function button() {
    if(id.value.length!=0 || password.value.length!=0){
        color.style.backgroundColor="blue";

    }else{
        color.style.backgroundColor="rgb(196, 224, 251)"
    }
    

}

/* 기본 흐름 

// git clone : master 를 받아옴 (git clone 주소)
// git branch : git branch (브렌치 명)(feature/login) //마스터의 잔가지 
git branch 치면 어떤 branch 있는지 볼수 있음 
//feature/login : git checkout feature/login : 이동 
// git add . 
// git commit -m "message"
// git push : git push origin feature/login //올리기 
PR (pull request ) : pr template 작성 
완벽하면 master 에 합병, 업데이트 


//마스터는 완성품만 그전까지는 브런치에다가 파일 올리기 
//
*/