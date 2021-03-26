const commentInput = document.querySelector('.input-comment');
const addCommentBtn = document.querySelector('.add-comment-btn');

const enabledBtn = () => {
    let commentInputValue = commentInput.value;
    if (commentInputValue.length > 0) {
        addCommentBtn.disabled = false;
        addCommentBtn.classList.remove('disabled-btn');
        addCommentBtn.classList.add('enabled-btn');
    } else {
        addCommentBtn.classList.add('disabled-btn');
        addCommentBtn.classList.remove('enabled-btn');
    }
}

commentInput.addEventListener('keyup', enabledBtn);

let idValue = 0;

//댓글 추가
const addComment = () => {
    let commentInputValue = commentInput.value.trim();

    if (commentInputValue.length > 0) {
        const ul = document.querySelector('.reply-list');
        const li = document.querySelector('.reply-list li');
        const newComment = li.cloneNode(true);

        idValue++;

        //아이디
        newComment.childNodes[1].innerHTML = `newId${idValue}`;
        //댓글내용
        newComment.childNodes[3].innerText = commentInput.value;

        ul.appendChild(newComment);

        //이벤트 추가
        newComment.childNodes[7].addEventListener('click', (e) => {
            likeReply(e.target);
        });

        newComment.childNodes[5].addEventListener('click', (e) => {
            deleteReply(e.target);
        });

        //초기화
        commentInput.value = '';
    }
}

addCommentBtn.addEventListener('click', addComment);

commentInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addComment();
    }
});

//스토리 슬라이더
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', (e) => {
    scroll('left');
});

nextBtn.addEventListener('click', (e) => {
    scroll('right');
});

const scroll = (direction) => {
    const instaStoryUl = document.querySelector('.insta-story ul');
    let scrollAmount = 0;

    const slide = setInterval((e) => {

        if (direction === 'left') {
            instaStoryUl.scrollLeft -= 15;
        } else {
            instaStoryUl.scrollLeft += 15;
        }

        scrollAmount += 5;
        if (scrollAmount >= 100) {
            window.clearInterval(slide);
        }
    }, 20);
}


//좋아요 버튼
const likeBtn = document.querySelectorAll('.like-heart');

const likeReply = (e) => {
    e.classList.toggle('reply-like');
    if (e.classList.contains('reply-like')) {
        e.classList.remove('xi-heart-o');
        e.classList.add('xi-heart');
        e.style.color = '#ed4956';
        alert('Like!!!');
    } else {
        e.classList.add('xi-heart-o');
        e.classList.remove('xi-heart');
        e.style.color = '#000';
        alert('unLike!!!');
    }
}

repeatFunction(likeBtn, likeReply, 'click');

//삭제 버튼
const deleteBtn = document.querySelectorAll('.delete-reply');

const deleteReply = (e) => {
    if (confirm('댓글을 삭제하시겠습니까?')) {
        e.parentNode.remove();
        alert('댓글이 삭제되었습니다.');
    }
}

repeatFunction(deleteBtn, deleteReply, 'click');


//좋아요아이콘 클릭하면 빨간색하트
const feedLikeBtn = document.querySelector('.like-btn');

const feedLike = (e) => {
    e.target.classList.toggle('feed-like');

    if (e.target.classList.contains('feed-like')) {
        feedLikeBtn.setAttribute('fill', '#ed4956');
        alert('Like!!!');
    } else {
        feedLikeBtn.removeAttribute('fill');
        alert('unLike!!!');
    }
}

feedLikeBtn.addEventListener('click', feedLike);

//댓글아이콘 클릭하면 focus
const replyBtn = document.querySelector('.reply-btn');
replyBtn.addEventListener('click', (e) => {
    commentInput.focus();
});

//li 생성 함수
const createLi = (id, imgSrc, desc) => {

    //ul
    const ul = document.querySelector('.search-list');

    //li만들기
    const li = document.createElement('li');

    //프로필사진
    const img = document.createElement('img');
    img.src = imgSrc;

    //div
    const div = document.createElement('div');

    //아이디
    const profileId = document.createElement('a');
    profileId.className = 'black';
    profileId.innerHTML = id;

    //desc
    const profileDesc = document.createElement('span');
    profileDesc.innerHTML = desc;

    div.appendChild(profileId);
    div.appendChild(profileDesc);
    li.appendChild(img);
    li.appendChild(div);
    ul.appendChild(li);
}

// 아이디검색
const id = [
    {
        id: 'wecode_bootcamp',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=sQeUd39qUKoAX9VnaGA&ccb=7-4&oh=17b03b2b8a140f6c76f50d5dc9fa4bc5&oe=6083E470&_nc_sid=5cbaad',
        desc: '>wecode | 위코드',
    },
    {
        id: 'wecode_socialclub',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/140310863_231997785073932_269675160654457255_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=StBkGcZ0hrEAX80OsAi&ccb=7-4&oh=d3e29c08f03b1c380b2a97576726c504&oe=608510F8&_nc_sid=5cbaad',
        desc: '>wecode | 위코드 소셜클럽',
    },
    {
        id: 'wecode_korea',
        profile: 'https://instagram.fsub6-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fsub6-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=NoLsLSZoKUEAX-sJry1&ccb=7-4&oh=7320b21f5be12b77480c0a37fa1655d3&oe=60837F0F&_nc_sid=3ae735&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4',
        desc: '',
    },
    {
        id: 'wecode_nsunny',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/21042108_123408488308642_162793317946359808_a.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=Ucb42Uat1L4AX_hM_9c&ccb=7-4&oh=2e9b3750947301d942c84e83c0de7421&oe=6083A396&_nc_sid=5cbaad',
        desc: '19기 김남선',
    },
    {
        id: 'instaquokka',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/83068469_871239260001584_2783495590741278720_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=zn4Gyu0gDyQAX_AVLoZ&ccb=7-4&oh=b88c919f724dd202373d0072aeaf4019&oe=608514A5&_nc_sid=5cbaad',
        desc: '호주 로트네스트에 사는 쿼카',
    },
    {
        id: 'quokkahub',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/75244464_444821669549677_6867741371608858624_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=5JbLDILyCsoAX8qTaUY&ccb=7-4&oh=cc69f2e480cf805a9e576848006029cf&oe=6085D122&_nc_sid=5cbaad',
        desc: '쿼카는 귀여웡',
    },
    {
        id: 'quokka_zzang',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/121710511_811898466235784_3838790021771545916_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=uiUoG9pXJCkAX9AcFrK&ccb=7-4&oh=dfa31dcf48a50e756132df78c69d8c42&oe=60839AB0&_nc_sid=5cbaad',
        desc: 'quokka instagram',
    },
    {
        id: 'wework',
        profile: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/119993917_266185074428695_5135767518355660666_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=g4ZMdTis9QgAX_3D-ZV&ccb=7-4&oh=aae2176b16a0ee83d0417df48cc72618&oe=6083E41C&_nc_sid=5cbaad',
        desc: '선릉 2호점',
    },
];

const searchInput = document.querySelector('.search-input');
const searchResult = document.querySelector('.search-result-wrap');
const searchList = document.querySelector('.search-list');
const keywordDelBtn = document.querySelector('.keyword-delete-btn');

const search = () => {

    if (searchInput.value.length > 0) {
        keywordDelBtn.classList.remove('hidden');
        searchResult.classList.remove('hidden');
        searchList.innerHTML = '';
        let hasResult = 0;

        id.filter((obj) => {
            const noResult = document.querySelector('.noResult');
            if (noResult) {
                noResult.remove();
            }
            if (obj.id.includes(searchInput.value.toLowerCase())) {
                hasResult++;
                createLi(obj.id, obj.profile, obj.desc);
            } else {
                hasResult === 0
                    ? searchList.innerHTML = '<span class="noResult light">검색결과가 없습니다.</span>'
                    : '';
            }
        });
    } else {
        searchResult.classList.add('hidden');
    }
}

searchInput.addEventListener('keyup', search);
keywordDelBtn.addEventListener('click', (e) => {
    searchInput.value = '';
    keywordDelBtn.classList.add('hidden');
})




// 프로필메뉴박스 클릭시 보이게 하기
const profile = document.querySelector('.profile-img');
const profileMenu = document.querySelector('.profile-menu-wrap');

const showProfileMenu = () => {
    profileMenu.classList.toggle('hidden');
}

profile.addEventListener('click', showProfileMenu);

//메뉴박스 밖 클릭 시 프로필 메뉴 닫기, 검색창 밖 클릭 시 검색결과창 닫기
document.addEventListener('click', (e) => {
    closeMenu(profileMenu, profile, e);
    closeMenu(searchResult, searchInput, e);
});

const closeMenu = (menubox, includedClass, e) => {
    if (!menubox.contains(e.target) && !includedClass.contains(e.target)) {
        menubox.classList.add('hidden');
    }
}