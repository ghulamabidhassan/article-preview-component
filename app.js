const btn = document.querySelector(".btn");

const overlayMob = document.querySelector(".overlay");
const overlayDesk = document.querySelector(".overlay-desktop");

btn.addEventListener("click", () => {
  overlayMob.classList.toggle("overlay-active");
  btn.classList.toggle("btn-overlay");
  btn.classList.toggle("fill");
  overlayDesk.classList.toggle("overlay-desktop-active");
});
