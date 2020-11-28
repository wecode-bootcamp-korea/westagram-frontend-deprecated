const firstName = [
  "lee",
  "kim",
  "park",
  "lim",
  "jung",
  "choi",
  "shin",
  "mun",
  "woo",
  "jun",
  "han",
  "yoon",
  "tak",
  "yong",
  "kang",
  "oh",
  "kwon",
  "hwang",
  "song",
  "jang",
  "joo",
]

const lastName = [
  "wecode",
  "wework",
  "we",
  "code",
  "work",
  "cute",
  "handsome",
  "pretty",
  "awesome",
  "kind",
  "gentle",
  "frontend developer",
  "backend developer",
  "developer",
  "frontend",
  "backend",
  "python",
  "javascript",
]

const dummyStory = [
  {
    id: 1,
    src: "src/img/youtube.png", 
    alt: "youtube icon",
  },
  {
    id: 2,
    src: "src/img/instagram.png",
    alt: "instagram icon",
  },
  {
    id: 3,
    src: "src/img/facebook.png",
    alt: "facebook icon"
  }
]

const dummyRecommendUser = [
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80",
    userId: "blue_00",
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    userId: "boom_99",
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    userId: "abcd_200",
  },
]

const dummyUsers = []
const dummyUsersObj = []

for(let i in firstName){
  for(let j in lastName){
    const userName = `${lastName[j]} ${firstName[i]}`;
    const userId = Math.floor(Math.random()*100000) + i + j[0];
    const profileImgUrl = `https://picsum.photos/id/${Number(i+1+j)%1000}/200/300`;
    dummyUsers.push(userName);
    dummyUsersObj.push({
      profileImgUrl: profileImgUrl,
      userName: userName,
      userId: userId,
    })
  }
}



export { dummyUsers, dummyUsersObj, dummyStory, dummyRecommendUser };