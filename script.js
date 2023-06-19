var menu = document.querySelectorAll(".menuIcon");
var menuIcons = document.getElementById("menuIcons");
var closeIcons = document.getElementById("closeIcon");
var links = document.getElementById("links");

menuIcons.addEventListener("click", () => {
  closeIcons.style.display = "block";
  menuIcons.style.display = "none";
  links.style.display = "block";
});

closeIcons.addEventListener("click", () => {
  closeIcons.style.display = "none";
  menuIcons.style.display = "block";
  links.style.display = "none";
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    menuIcons.style.display = "block";
    links.style.display = "none";
    closeIcons.style.display = "none";
  })
);
