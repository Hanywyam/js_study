const slideItems = document.querySelectorAll(".slideWrapper .slideItem");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

console.log(slideItems);
// NodeList[li, li, li, li]

let idx = 0;
nextBtn.addEventListener("click", () => {
  slideItems[idx].classList.remove("active");
  idx++;
  if (idx >= slideItems.length) idx = 0;
  // idx >= slideItems.length ? (idx = 0) : false;
  slideItems[idx].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  slideItems[idx].classList.remove("active");
  idx--;
  idx < 0 ? (idx = slideItems.length - 1) : false;
  slideItems[idx].classList.add("active");
});

// setInterval(콜백함수, 시간);
setInterval(() => {
  nextBtn.click();
}, 3000);
