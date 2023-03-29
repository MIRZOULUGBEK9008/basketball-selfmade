const elLoader = document.querySelector(".loader-wrapper"),
elHome = document.querySelector(".js-score-home"),
elGuest = document.querySelector(".js-score-guest"),
elScores = document.querySelectorAll(".js-button"),
elReset = document.querySelector(".reset");

// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    elLoader.classList.add("loader-wrapper--open");
  }, 1000);
});

const greaterColor = "greater-color";

let scoresHome = 0;
let scoresGuest = 0;

// checkGreater() function
function checkGreater() {
  if (scoresHome > scoresGuest) {
    scoresHome.classList.add(greaterColor);
    scoresGuest.classList.remove(greaterColor);
  } else if (scoresHome < scoresGuest) {
    scoresGuest.classList.add(greaterColor);
    scoresHome.classList.remove(greaterColor);
  } else {
    scoresHome.classList.remove(greaterColor);
    scoresGuest.classList.remove(greaterColor);
  }
}

elScores.forEach(score => {
  score.addEventListener("click", () => {
    if (score.dataset.player === "0") {
      scoresHome += score.value * 1;
      elHome.textContent = scoresHome;
      checkGreater();
    } else {
      scoresGuest += score.value * 1;
      elGuest.textContent = scoresGuest;
      checkGreater();
    }
  });
});

elReset.addEventListener("click", () => {
  scoresHome = 0;
  scoresGuest = 0;
  elHome.textContent = scoresHome;
  elGuest.textContent = scoresGuest;
});