const locateStoryBox = document.querySelector('.storyBox');
const storyList = [
  {
    name: 'Moana',
    image: './data/friends/friend2.png',
  },
  {
    name: 'Elsa_Bryantis',
    image: './data/friends/friend3.png',
  },
  {
    name: 'No_Name',
    image: './data/friends/friend4.png',
  },
  {
    name: 'Mérida',
    image: './data/friends/friend5.png',
  },
  {
    name: 'Tinker_Bell',
    image: './data/friends/friend6.png',
  },
  {
    name: 'Vanellope',
    image: './data/friends/friend7.png',
  },
  {
    name: 'Tangled2010',
    image: './data/friends/friend8.png',
  },
  {
    name: 'Extra_man1',
    image: './data/friends/friend9.png',
  },
  {
    name: 'Aladin',
    image: './data/friends/friend1.png',
  },
  {
    name: 'Kristoff',
    image: './data/friends/friend10.png',
  },
  {
    name: 'Elsa_Twin',
    image: './data/friends/friend3.png',
  },
];

storyList.map((ele) => {
  let getName = ele.name;
  let getImage = ele.image;
  locateStoryBox.innerHTML += `<div class="storyList">
    <a href="">
      <img src="./img/circle.png" class="canvas" />
      <img src=${getImage} class="circle" />
      <div class="storyName small-text">${getName}</div>
    </a>
  </div>`;
});
