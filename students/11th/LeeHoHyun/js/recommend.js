const recommend_friends_con = document.querySelector('.recommend-friends-con');

// 임시로 추천 친구 배열 만들어서 넣음
const friendsArr = [
    {
        id: 'pen',
        img: './img/pen.png',
        following: '회원님을 팔로우합니다',
        isFollow: '팔로잉'
    },
    {
        id: 'cat',
        img: './img/cat.jpg',
        following: 'Facebook 친구',
        isFollow: '팔로우'
    },
    {
        id: 'bear',
        img: './img/bear.jpg',
        following: 'Facebook 친구',
        isFollow: '팔로우'
    },
    {
        id: 'haedal',
        img: './img/hae.jpg',
        following: 'haedal님이 팔로우합니다',
        isFollow: '팔로우'
    },
    {
        id: 'ham',
        img: './img/ham.jpg',
        following: 'ham님이 팔로우합니다',
        isFollow: '팔로우'
    },
]

for(let i = 0; i < 5; i++){
    recommend_friends_con.appendChild(makeRecommends(friendsArr[i]));
}

function makeRecommends(friend){
    const recommend_friend = document.createElement('div');
    recommend_friend.classList.add('recommend-friend');

    const recommend_friend_img = document.createElement('div');
    recommend_friend_img.classList.add('recommend-friend-img');
    const img = document.createElement('img');
    img.src = friend.img;
    recommend_friend_img.appendChild(img);
    recommend_friend.appendChild(recommend_friend_img);

    const recommend_friend_following = document.createElement('div');
    recommend_friend_following.classList.add('recommend-friend-following');
    const recommend_friend_id = document.createElement('div');
    recommend_friend_id.classList.add('recommend-friend-id');
    recommend_friend_id.innerHTML = friend.id;
    recommend_friend_following.appendChild(recommend_friend_id);
    const recommend_friend_follow = document.createElement('div');
    recommend_friend_follow.classList.add('recommend-friend-follow');
    recommend_friend_follow.innerHTML = friend.following;
    recommend_friend_following.appendChild(recommend_friend_follow);
    recommend_friend.appendChild(recommend_friend_following);

    const recommend_friend_is_follow_con = document.createElement('div');
    recommend_friend_is_follow_con.classList.add('recommend-friend-is-follow-con');
    const recommend_friend_is_follow = document.createElement('button');
    recommend_friend_is_follow.classList.add('recommend-friend-is-follow');
    recommend_friend_is_follow.innerHTML = friend.isFollow;
    recommend_friend_is_follow_con.appendChild(recommend_friend_is_follow);
    recommend_friend.appendChild(recommend_friend_is_follow_con);

    return recommend_friend;
}