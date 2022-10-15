const grid = document.querySelector("#grid");
// const changeGridSizeButton = document.querySelector("#changeGridSize");

function divMaker(howMany) {
  for (let i = 0; i < howMany; i++) {
    const createDiv = document.createElement("div");
    // const body = document.body;
    createDiv.className = "div";
    grid.append(createDiv);
  }
  const eachDiv = document.querySelectorAll(".div").forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "blue";
    });
  });
}

// const userChoices = document.getElementById("userChoice");

const userChoice1 = document.querySelector("#x10000");

// function changeGridSize() {
//   return divMaker(selection);
// }

userChoice1.addEventListener(
  "click",
  (e) => {
    // if (e.target.tagName === "div") {
    //   e.target.classList.toggle("twobytwo");
    // }
    divMaker(userChoice1.value);
  },
  { once: true }
);
// document.querySelectorAll("button").forEach((each) => {
//   each.addEventListener("click", (e) => {
//     divMaker(e.value);
//   });
// });

let divs = document.querySelectorAll("#div");

// divs.forEach((item) => {
//   item.addEventListener("mouseleave", function (e) {
//     e.target.style.backgroundColor = "red";
//   });
// });
