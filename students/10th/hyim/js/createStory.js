const storyContainer = document.querySelector(".story-container");

function createEachStory() {
  let newLi = document.createElement("li");
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  let newSpan = document.createElement("span");

  newLi.className = "story-list";
  newDiv.className = "story-border";
  newSpan.className = "story-user-id";
  newSpan.innerText = "yaya_y";
  newImg.src =
    "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/17882650_1897373507218922_5665567046067290112_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=YDY0gaOL168AX-zxqjH&oh=69916108cfd098a2e537dff3968cf40b&oe=5F2486BC";
  newDiv.append(newImg);
  newLi.append(newDiv);
  newLi.append(newSpan);
  return newLi;
}

function moreStories() {
  for (let i = 0; i < 20; i++) {
    storyContainer.append(createEachStory());
  }
}

moreStories();
