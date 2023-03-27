const elLoader = document.querySelector(".loader-wrapper"),
elHome = document.querySelector(".scoreboard__score-home"),
elGuest = document.querySelector(".scoreboard__score-guest"),
elHomeScoreOne = document.querySelector(".js-home-scoreplus_one"),
elHomeScoreTwo = document.querySelector(".js-home-scoreplus_two"),
elHomeScoreThree = document.querySelector(".js-home-scoreplus_three"),
elGuestScoreOne = document.querySelector(".js-guest-scoreplus_one"),
elGuestScoreTwo = document.querySelector(".js-guest-scoreplus_two"),
elGuestScoreThree = document.querySelector(".js-guest-scoreplus_three");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    elLoader.classList.add("loader-wrapper--open");
  }, 1000);
});