/*DOM list*/
const blockAll = document.querySelectorAll(".block");
const block1 = document.querySelector(".block-1");
const block2 = document.querySelector(".block-2");
const block3 = document.querySelector(".block-3");
const block4 = document.querySelector(".block-4");
const block5 = document.querySelector(".block-5");
const block6 = document.querySelector(".block-6");
const block7 = document.querySelector(".block-7");

const leftHand = document.querySelector(".left-hand");
const rightHand = document.querySelector(".right-hand");

const roadAll = document.querySelectorAll(".road");
const road1_2 = document.querySelector(".road1-2");
const road1_6 = document.querySelector(".road1-6");
const road1_7 = document.querySelector(".road1-7");
const road2_3 = document.querySelector(".road2-3");
const road3_4 = document.querySelector(".road3-4");
const road3_5 = document.querySelector(".road3-5");
const road3_6 = document.querySelector(".road3-6");
const road4_5 = document.querySelector(".road4-5");
const road5_6 = document.querySelector(".road5-6");
const road5_7 = document.querySelector(".road5-7");

const solve = document.querySelector(".solve");

let choosenHand = "";
let block1Enable = false;
let block2Enable = false;
let block3Enable = false;
let block4Enable = false;
let block5Enable = false;
let block6Enable = false;
let block7Enable = false;
let leftHandPath = [1];
let step = 0;

leftHand.addEventListener("click", () => {
  choosenHand = "leftHand";
  showPath(leftHand, rightHand);
});
rightHand.addEventListener("click", () => {
  choosenHand = "rightHand";
  showPath(rightHand, leftHand);
});
function showPath(x, y) {
  let currentBlock = x.textContent;
  let relativeBlock = y.textContent;
  switch (currentBlock) {
    case "1":
      switch (relativeBlock) {
        case "2":
          addPath(road1_7);
          addPath(block7);
          block7Enable = true;
          break;
        case "3":
          addPath(road1_2);
          addPath(block2);
          block2Enable = true;
          break;
        case "4":
          addPath(road1_7);
          addPath(block7);
          block7Enable = true;
          break;
        case "5":
          addPath(road1_7);
          addPath(block7);
          block7Enable = true;
          break;
        case "6":
          addPath(road1_6);
          addPath(block6);
          block6Enable = true;
          break;
        case "7":
          addPath(road1_2);
          addPath(block2);
          block2Enable = true;
          break;
      }
      break;
    case "2":
      switch (relativeBlock) {
        case "3":
          addPath(road1_2);
          addPath(block1);
          block1Enable = true;
          break;
        case "4":
          addPath(road2_3);
          addPath(block3);
          block3Enable = true;
          break;
        case "5":
          addPath(road2_3);
          addPath(block3);
          block3Enable = true;
          break;
        case "7":
          addPath(road1_2);
          addPath(block1);
          block1Enable = true;
          break;
      }
      break;
    case "3":
      switch (relativeBlock) {
        case "1":
          addPath(road3_4);
          addPath(block4);
          block4Enable = true;
          break;
        case "2":
          addPath(road2_3);
          addPath(block2);
          block2Enable = true;
          addPath(road3_6);
          addPath(block6);
          block6Enable = true;
          break;
        case "4":
          addPath(road2_3);
          addPath(block2);
          block2Enable = true;
          addPath(road3_6);
          addPath(block6);
          block6Enable = true;
          break;
        case "5":
          addPath(road2_3);
          addPath(block2);
          block2Enable = true;
          addPath(road3_6);
          addPath(block6);
          block6Enable = true;
          break;
        case "6":
          addPath(road3_4);
          addPath(block4);
          block4Enable = true;
          break;
        case "7":
          addPath(road3_5);
          addPath(block5);
          block5Enable = true;
          break;
      }
      break;
    case "4":
      switch (relativeBlock) {
        case "1":
          addPath(road3_4);
          addPath(block3);
          block3Enable = true;
          break;
        case "3":
          addPath(road4_5);
          addPath(block5);
          block5Enable = true;
          break;
        case "6":
          addPath(road3_4);
          addPath(block3);
          block3Enable = true;
          break;
        case "7":
          addPath(road4_5);
          addPath(block5);
          block5Enable = true;
          break;
      }
      break;
    case "5":
      switch (relativeBlock) {
        case "1":
          addPath(road5_7);
          addPath(block7);
          block7Enable = true;
          break;
        case "3":
          addPath(road3_5);
          addPath(block3);
          block3Enable = true;
          addPath(road4_5);
          addPath(block4);
          block4Enable = true;
          addPath(road5_6);
          addPath(block6);
          block6Enable = true;
          break;
        case "6":
          addPath(road5_7);
          addPath(block7);
          block7Enable = true;
          break;
        case "7":
          addPath(road3_5);
          addPath(block3);
          block3Enable = true;
          addPath(road4_5);
          addPath(block4);
          block4Enable = true;
          addPath(road5_6);
          addPath(block6);
          block6Enable = true;
          break;
      }
      break;
    case "6":
      switch (relativeBlock) {
        case "1":
          addPath(road1_6);
          addPath(block1);
          block1Enable = true;
          break;
        case "2":
          addPath(road3_6);
          addPath(block3);
          block3Enable = true;
          break;
        case "3":
          addPath(road5_6);
          addPath(block5);
          block5Enable = true;
          break;
        case "4":
          addPath(road3_6);
          addPath(block3);
          block3Enable = true;
          break;
        case "5":
          addPath(road3_6);
          addPath(block3);
          block3Enable = true;
          break;
        case "7":
          addPath(road5_6);
          addPath(block5);
          block5Enable = true;
          break;
      }
      break;
    case "7":
      switch (relativeBlock) {
        case "1":
          addPath(road5_7);
          addPath(block5);
          block5Enable = true;
          break;
        case "2":
          addPath(road1_7);
          addPath(block1);
          block1Enable = true;
          break;
        case "4":
          addPath(road1_7);
          addPath(block1);
          block1Enable = true;
          break;
        case "5":
          addPath(road1_7);
          addPath(block1);
          block1Enable = true;
          break;
        case "6":
          addPath(road5_7);
          addPath(block5);
          block5Enable = true;
          break;
      }
  }
}
function addPath(el) {
  el.classList.add("path");
}
function clearPath() {
  blockAll.forEach((el) => {
    el.classList.remove("path");
  });
  roadAll.forEach((el) => {
    el.classList.remove("path");
  });
}
function changeHandContent(chooseHand, x) {
  if (choosenHand == "leftHand") {
    if (leftHandPath.includes(x)) {
      alert("you can't go back");
    } else {
      leftHand.textContent = `${x}`;
      leftHandPath.push(x);
    }
  } else if (choosenHand == "rightHand") {
    rightHand.textContent = `${x}`;
  }
}
function checkSolve() {
  if (rightHand.textContent == leftHand.textContent) {
    if (step == 6) {
      solve.classList.add("display");
    } else {
      solve.textContent = "步數過多";
      solve.classList.add("display");
    }
  }
}
function setAllEnable() {
  block1Enable = false;
  block2Enable = false;
  block3Enable = false;
  block4Enable = false;
  block5Enable = false;
  block6Enable = false;
  block7Enable = false;
}

block1.addEventListener("click", () => {
  if (block1Enable) {
    changeHandContent(choosenHand, 1);
    clearPath();
    setAllEnable();
    step += 1;
  }
});
block2.addEventListener("click", () => {
  if (block2Enable) {
    changeHandContent(choosenHand, 2);
    clearPath();
    checkSolve();
    setAllEnable();
    step += 1;
  }
});
block3.addEventListener("click", () => {
  if (block3Enable) {
    changeHandContent(choosenHand, 3);
    clearPath();
    checkSolve();
    setAllEnable();
    step += 1;
  }
});
block4.addEventListener("click", () => {
  if (block4Enable) {
    changeHandContent(choosenHand, 4);
    clearPath();
    checkSolve();
    setAllEnable();
    step += 1;
  }
});
block5.addEventListener("click", () => {
  if (block5Enable) {
    changeHandContent(choosenHand, 5);
    clearPath();
    checkSolve();
    setAllEnable();
    step += 1;
  }
});
block6.addEventListener("click", () => {
  if (block6Enable) {
    changeHandContent(choosenHand, 6);
    clearPath();
    checkSolve();
    setAllEnable();
    step += 1;
  }
});
block7.addEventListener("click", () => {
  if (block7Enable) {
    changeHandContent(choosenHand, 7);
    clearPath();
    checkSolve();
    setAllEnable();
    step += 1;
  }
});
