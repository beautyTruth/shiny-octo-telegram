const happyDay = document.querySelector(".happy-day");
const thisIsTheNewYear = new Date().getFullYear();
happyDay.textContent = thisIsTheNewYear;

let counter1 = 0;
let counter2 = 1;

const sections = document.querySelectorAll("section");
const progress = document.querySelector(".progress h2");
const circles = document.querySelectorAll(".circle");

const progressCounter = () => {
  progress.textContent = `${counter2}/${sections.length}`;

  Array.from(circles).forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor =
    "#faebd7";
};

window.addEventListener("wheel", (e) => {
  const deltaDawn = e.deltaY > 0;

  if (deltaDawn) {
    counter1++;
    counter2++;
  } else {
    counter1--;
    counter2--;
  }

  if (counter1 === 5) {
    Array.from(sections).forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    progressCounter();
    return;
  }

  if (counter1 === -1) {
    Array.from(sections).forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    progressCounter();
  }

  progressCounter();

  document.querySelector(
    `.section-${deltaDawn ? counter1 : counter2}`
  ).style.left = `${deltaDawn ? "-100vw" : "0"}`;

  console.log(counter1, counter2);
});
