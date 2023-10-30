const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

toggleBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  nav.classList.toggle("on");
});
