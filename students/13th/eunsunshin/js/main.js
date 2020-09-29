const searchArr = [
    {  num : 0,
       id : 'wecode_bootcamp',
       info : ' wecode 위코드',
       picSrc : 'https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_ohc=_Csvb8SfdY8AX8_0JDI&oh=6bcb1489e580b84ee44f8e2cdab8a672&oe=5F9E1A0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
       displayState : 'inital'
    },
    {  num : 0, 
       id : 'wecode_founder',
       info : '송은우 (Eun Woo Song)',
       picSrc : 'https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_ohc=_Csvb8SfdY8AX8_0JDI&oh=6bcb1489e580b84ee44f8e2cdab8a672&oe=5F9E1A0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
       displayState : 'initial'
    },
    {  num : 0,
       id : 'eunsunny',
       info : '은선',
       picSrc : 'https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_ohc=_Csvb8SfdY8AX8_0JDI&oh=6bcb1489e580b84ee44f8e2cdab8a672&oe=5F9E1A0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
       displayState : 'initial'
    },
    {  num : 0,
       id : 'yours2ry',
       info : '지니어쓰 정 ',
       picSrc : 'https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_ohc=_Csvb8SfdY8AX8_0JDI&oh=6bcb1489e580b84ee44f8e2cdab8a672&oe=5F9E1A0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
       displayState : 'initial'
    },
    {  num : 0,
       id : 'muuuuuuji',
       info : '무지막지',
       picSrc : 'https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_ohc=_Csvb8SfdY8AX8_0JDI&oh=6bcb1489e580b84ee44f8e2cdab8a672&oe=5F9E1A0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
       displayState : 'initial'
    },
    {  num : 0,
       id : 'corgibh',
       info : '우리집의 백호',
       picSrc : 'https://instagram.fadb3-2.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fadb3-2.fna.fbcdn.net&_nc_ohc=_Csvb8SfdY8AX8_0JDI&oh=6bcb1489e580b84ee44f8e2cdab8a672&oe=5F9E1A0F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2',
       displayState : 'initial'
    }
];


const searchInput = document.querySelector('.search input');
const searchUserList = document.getElementsByClassName('userList')[0];
searchUserList.style.visibility = 'hidden';

const search = ( ) => {
    //function which make able to search on the nav bar
    const searchVal = searchInput.value;
    const searchResultCon = document.getElementsByClassName('searchResultCon')[0];
    searchUserList.innerHTML = '';
   
    if(searchVal.length === 0){
        searchUserList.style.visibility = 'hidden';
        searchResultCon.style.visibility = 'hidden'; 
      } else {
        const arrFilter = (obj) => {
            const idVal = obj.id;
            return idVal.includes(searchVal);
        };

        let newSearchArr = searchArr.filter(arrFilter);
       
        if(newSearchArr.length > 0){
            searchResultCon.style.visibility = 'visible';
            searchUserList.style.visibility = 'visible';
            return newSearchArr.map(makeListUser);
        } else {
            searchUserList.style.visibility = 'hidden';
            searchResultCon.style.visibility = 'hidden';
        };
  };
};


const myPageIcon = document.getElementById('myPageIcon');

const makeProfileBox = (e) => {
    //function which show profile Box when you click mypage icon. 
    const profileBox = document.querySelector('.profileBox');
    const target = e.target;
    const isClickInside = myPageIcon.contains(target);

    if(!isClickInside){
        profileBox.style.visibility = 'hidden';
    } else {
        profileBox.style.visibility = 'visible';
    }
};


const makePosting = (obj) => {
    //function which make posing article
    const postingUser = document.getElementById('postingUser');
    const postingImg = document.getElementById('postingImg');

    postingUser.innerHTML = `
    <div id= "postingUserInfo">   
       <img id= "postingUserPic" alt= "" src=${obj.userPic} />
       <div id= "postingUserId">
         <span>${obj.userId}</span>
    </div>
    <img id="threeDot" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png">
    `
    postingImg.src = obj.postingPic;
};

const postingObj= {
     userId : 'jennierubyjane',
     userPic : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/71533411_449636125903525_7464596574253875200_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Izru35a3h2sAX8nevRu&oh=758a9402e3a5fc0c94d43472cfe548fb&oe=5F914C5B',
     postingPic : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/c0.180.1440.1440a/s480x480/110273507_905365949964229_8624643048007969742_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=hg_5QTJDAskAX9Cz3T1&_nc_tp=16&oh=644f951f76379c807cad52ce483eff42&oe=5F93D20D'
};


const deleteReply = (event) => {
    const targetDelBtn = event.target;
    const targetReply = targetDelBtn.parentNode;
    targetReply.remove();
};

const feedLikeIcon = document.querySelector('.likeIconCon');

const activateLikeBtn = (event) => {
    const targetLikeBtn = event.currentTarget;
    const targetHeart= targetLikeBtn.children;
 
    targetHeart[0].classList.toggle("visibility");
    targetHeart[1].classList.toggle("visibility");
};

function makeReply(idVal, cmntVal) {
    const replyUl = document.querySelector('.replyUl');
    let makeReplyLi = document.createElement('li');
    let replyIdSpan = document.createElement('span');
    let replyCmntSpan = document.createElement('span');
    const makeLikeDiv = document.createElement('div');
    const makeDelBtn = document.createElement('button');

    makeDelBtn.addEventListener("click", deleteReply);
    makeLikeDiv.addEventListener("click", activateLikeBtn);

    replyUl.appendChild(makeReplyLi);
    let lastLi = replyUl.lastChild;
    lastLi.appendChild(replyIdSpan);
    lastLi.appendChild(replyCmntSpan);
    lastLi.appendChild(makeLikeDiv);
    lastLi.appendChild(makeDelBtn);

    let replyChildren= lastLi.children;

    replyChildren[0].innerHTML = idVal;
    replyChildren[0].className = 'replyId';
    replyChildren[1].innerHTML = cmntVal;
    replyChildren[1].className = 'replyCont';
    replyChildren[2].innerHTML = `<img class= "hollowHeart" src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png">
                                  <img class= "fullHeart visibility" src = "./img/heart.png">`
    replyChildren[2].className = 'likeBtn'
    replyChildren[3].innerHTML = '❌';
    replyChildren[3].className = 'deleteBtn'
};


const postBtn = document.getElementById('postBtn');
const reply = document.querySelector('section input');

function makeNewReply ( ) {
    let replyVal = reply.value;

    if(replyVal.length > 0){
         makeReply('eunsonny', replyVal);
    }
};

const makeReplyByEnter = function(e){
    if(e.keyCode === 13){
        makeNewReply();
    }
};

const activatePostBtn = ( ) => {
    let replyVal = reply.value; 
    let postBtnText = document.querySelector('#postBtn span');

    return(replyVal.length > 0 ? postBtnText.style.color = '#009DF9': postBtnText.style.color = '#B9DFFC');
};

const sectionArr = [
    {
        classname : 'story',
        text : 'storyText',
        span : '스토리',
        a : '모두보기'
    },
    {   classname: 'recommend',
        text: 'recommendText',
        span: '회원님을 위한 추천',
        a : '모두보기' 
    }
];

const makeSection = (obj) => {
    //function which make story and recommend section on .main-right
    const mainRight = document.querySelector('.main-right');
    const makeSection =  document.createElement('section');
    
    mainRight.appendChild(makeSection);
    mainRight.lastChild.className = obj.classname;
    mainRight.lastChild.innerHTML = 
    `
                 <div id= ${obj.text}>
                    <span>${obj.span}</span>
                    <a>${obj.a}</a>
                  </div>
                  <ul class="userList"></ul>
    `;
  };

const makeListUser = (obj) => {
    // num = 0 for searchUserList, num = 1 for storyUserList, num = 2 for recommendUserList
    let userList = document.getElementsByClassName('userList')[obj.num];
    let makeLi = document.createElement('li');
    let makeImg = document.createElement('img');
    let makeDiv = document.createElement('div');
    let makeP = document.createElement('p');
    let makeSpan = document.createElement('span');
    
    userList.appendChild(makeLi);
    let lastUser = userList.lastChild;
    lastUser.className = 'user';
    lastUser.appendChild(makeImg);
    lastUser.appendChild(makeDiv);
    lastUser.firstChild.src = obj.picSrc;
    lastUser.lastChild.className = 'userInfo';
        
    let userInfo = lastUser.lastChild;
    userInfo.appendChild(makeP);
    userInfo.appendChild(makeSpan);
    userInfo.firstChild.innerHTML = obj.id;
    userInfo.lastChild.innerHTML =  obj.info;
    
    if(obj.num === 0){
        lastUser.setAttribute('display', obj.displayState);
        userInfo.lastChild.innerHTML = obj.info;
        userInfo.lastChild.className = "searchedUserName";
    }

    if(obj.num === 2){
        let makeA = document.createElement('a');
        lastUser.appendChild(makeA);
        lastUser.lastChild.innerHTML = '팔로우';
    }
};

const storyUserArr = [
    { num: 1,
      id : 'ssoheean',
      info : '14분전',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118432458_730197867537177_3431571721818164020_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=NcNdv4UD9QIAX_AJxLn&oh=9dac88524d83a53cb1eaa8a737b4fe21&oe=5F90EAD8'
    },
    { num: 1,
      id : 'yours2ly',
      info : '1시간 전',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/105458162_3253163544736458_7407263988890395506_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=SWyloWG48S0AX99kznn&oh=2ef65f1de75d7f5b2705d7f2fad76252&oe=5F9E37E1'
    },
    { num: 1,
      id : 'daseul',
      info : '2시간 전',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118058151_2578630825782233_2572232295955462776_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=AOF_B2nuvDMAX878Fw8&oh=f60e6c1047816c9ef943c8f4dc12ec2f&oe=5F9D0EAC'
    },
    { num: 1,
      id : 'tenderlovingcare',
      info : '17시간 전',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/60482857_874781462865526_902632053504212992_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=GgZ6nj-OA4AAX9ys_bD&oh=6a39b97b4ff17cab8afc9ecf5679681e&oe=5F9C4DDB'
    }
];

const recommendUserArr = [
    { num: 2,
      id : 'corgibh',
      info : 'eunji님 외 11명이 팔로우합니다 ',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/74490511_471880130353160_3130748176273768448_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hPiqmfRUcyoAX_Ij70b&oh=81c5c897fefd2d8cf1e32ea2ec176e01&oe=5F9C321B'
    },
    { num: 2,
      id : 'muuuuuuji',
      info : 'Jennie님 외 5명이 팔로우합니다',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.12442-15/e35/c157.880.471.471a/s150x150/79473995_2616382741781142_351196571197428485_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=WqA6qrkliEEAX-nPzvK&_nc_tp=16&oh=54b52f2609515017aa641bad8c468201&oe=5F7513F6'
    },
    { num: 2,
      id : 'A.P.C.',
      info : 'Ahn님 외 20명이 팔로우합니다',
      picSrc : 'https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/10616768_752567294802697_1874359907_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=kKhu__2xMgQAX-PnFzN&oh=b39b576e0db1c22eb5758d336fde3094&oe=5F9CE1B7'
    }
];

const init = () => {
   searchInput.addEventListener('keyup', () => search(searchArr));
   document.addEventListener('click', makeProfileBox);
   makePosting(postingObj);
   feedLikeIcon.addEventListener('click', activateLikeBtn);
   makeReply('jaelming','Jennie');
   makeReply('keemleem','unni english please');
   sectionArr.map(makeSection);
   storyUserArr.map(makeListUser);
   recommendUserArr.map(makeListUser);
   reply.addEventListener('keyup', activatePostBtn);
   reply.addEventListener('keydown', makeReplyByEnter);
   postBtn.addEventListener('click', makeNewReply);
};

init();
