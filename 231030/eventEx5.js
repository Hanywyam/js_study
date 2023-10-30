const menuCon = document.querySelector(".container");
const btn = document.querySelector(".btn-wrap");

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  menuCon.classList.toggle("on");
  btn.classList.toggle("active");
});
