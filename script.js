var menu = document.querySelectorAll(".menuIcon");
var menuIcons = document.getElementById("menuIcons");
var closeIcons = document.getElementById("closeIcon");
var links = document.getElementById("links");

menuIcons.addEventListener("click", () => {
  closeIcons.style.display = "block";
  menuIcons.style.display = "none";
  links.style.display = "block";
  document.querySelector(".container").style.backgroundColor = "#1616160E";
});

closeIcons.addEventListener("click", () => {
  closeIcons.style.display = "none";
  menuIcons.style.display = "block";
  links.style.display = "none";
  document.querySelector(".container").style.backgroundColor = "";
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    menuIcons.style.display = "block";
    links.style.display = "none";
    closeIcons.style.display = "none";
    document.querySelector(".container").style.backgroundColor = "";
  })
);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.10": {
      slidesPerView: 3,
    },
    "@1.50": {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
