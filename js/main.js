const elLoader = document.querySelector(".loader-wrapper"),
elHome = document.querySelector(".js-score-home"),
elGuest = document.querySelector(".js-score-guest"),
elScores = document.querySelectorAll(".js-button");

// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    elLoader.classList.add("loader-wrapper--open");
  }, 1000);
});

const greater = "greater";

let scores = [0, 0];

// checkGreater() function
function checkGreater() {
  if (scores[0] > scores[1]) {
    scores[0].classList.add("greater")
    scores[1].classList.toggle("greater")
  } else if (scores[0] < scores[1]) {
    scores[1].classList.add("greater")
    scores[0].classList.remove("greater")
  } else {
    scores[0].classList.remove("greater")
    scores[1].classList.remove("greater")
  }
}

elScores.forEach(score => {
  score.addEventListener("click", () => {
    if (score.dataset.player === "0") {
      scores[0] =+ score.value;
      elHome.textContent = scores[0];
      checkGreater();
    } else {
      scores[1] =+ score.value;
      elGuest.textContent = scores[1];
      checkGreater();
    }
  });
});