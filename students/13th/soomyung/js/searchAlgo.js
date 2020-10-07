// NOTE search Algorithm:
//(e.g.) coming out "wecode" when searching "wcd", "cd", "oe", "ee" and so on...

// ANCHOR search array creater: using subset Algo
const searchArrayCreator = (str) => {
  const findLetter = (v) => {
    if (v >= str.length) {
      // except [0,0,0 ...] array for the last recurring
      if (checkArray.filter((e) => e == 0).length !== 3) {
        // recurring
        for (let i = 0; i < str.length; i++) {
          if (checkArray[i] == 1) {
            input += str[i];
          }
        }
        // add divider
        input += "/";
      }
    } else {
      checkArray[v] = 1;
      // first recurring +stack
      findLetter(v + 1);
      checkArray[v] = 0;
      // second recurring +stack
      findLetter(v + 1);
    }
  };

  const checkArray = [];
  let input = "";

  // generate [0,0,0,0 ...] array matched string text
  for (i in str) {
    checkArray.push(0);
  }

  // function trigger
  findLetter(0);
  // except last "/" letter for split!
  const result = input.slice(0, input.length - 1).split("/");
  return result;
};

// searchArray application from existing db
const allConditionDB = userList.map((user) => searchArrayCreator(user.id));

// ul initiate
const initUl = () => {
  // remove old ul
  searchUl.remove();
  // regenerate new ul
  searchUl = document.createElement("ul");
  searchUl.classList.add("user-list");
  ulParent.append(searchUl);
};

// search update
searchBox.addEventListener("keyup", () => {
  //event trigger
  if (searchBox.value != "") {
    // something input on search box

    // placeholder text clear
    searchLabelText.classList.add("display-none");

    // show search menu
    searchMenu.classList.remove("display-none");

    // initialize to empty ul list remove => create new ul
    initUl();

    // false count check for how much user(all condition array) doesn't matched with input for one event!
    let falseCnt = 0;

    // Loop one array from multiple Array (here is 6 loop!)
    allConditionDB.forEach((conArray) => {
      if (conArray.includes(searchBox.value)) {
        // check input value in User(condition array elements); the first element of condition array is full text(full ID)

        const li = document.createElement("li");
        userList.forEach((user) => {
          // matching userdata from original DB with the first element from the array matched with input value at least one

          // then show the search result
          if (user.id === conArray[0]) {
            li.insertAdjacentHTML(
              "beforeend",
              `
              <div class="li-avatar">
                <img
                src="${user.profile}"
                alt="userAvatar"
                class="li-pic"
                />
              </div>
              <div class="user">
                <span>${user.id}</span>
                <span>${user.name}</span>
              </div>
              `
            );
            searchUl.append(li);
          }
        });
      }
      if (!conArray.includes(searchBox.value)) {
        // check input value NOT in user (condition Array)

        // false cnt increasing 1 how much user(condition array) not matched with input value
        // e.g. one user didn't match = 1
        falseCnt++;

        // if all the user didn't match with input value
        if (falseCnt >= userList.length) {
          // default list item created
          const emptyLi = document.createElement("li");
          emptyLi.classList.add("empty-list");
          emptyLi.innerHTML = "No results found.";

          // append default list item first then...
          searchUl.append(emptyLi);
        }
      }
    });
  } else {
    // if there is no input on searchbox

    //regenerate placeholder!
    searchLabelText.classList.remove("display-none");

    // don't show search dropdown menu
    searchMenu.classList.add("display-none");

    // initialize to empty ul list remove => create new ul
    initUl();
  }
});
