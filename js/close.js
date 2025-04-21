document.addEventListener("DOMContentLoaded", function () {
  let trigger = document.querySelector(".trigger");
  let fade_in = document.querySelector(".fade_in");
  let close_search = document.querySelector(".close_search");

  trigger.addEventListener("click", function () {
    fade_in.classList.remove("none");
  });

  close_search.addEventListener("click", function () {
    fade_in.classList.add("none");
  });
});
