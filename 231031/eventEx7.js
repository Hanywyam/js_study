const lists = document.querySelectorAll(".tap-box li");
const titles = document.querySelectorAll(".title");
const title = document.querySelector(".title");

console.log(titles);
console.log(title);

/* 
titles[0].addEventListener("click", () => {
  lists[1].classList.remove("active");
  lists[2].classList.remove("active");
  lists[0].classList.add("active");
});
titles[1].addEventListener("click", () => {
  lists[0].classList.remove("active");
  lists[2].classList.remove("active");
  lists[1].classList.add("active");
});
titles[2].addEventListener("click", () => {
  lists[0].classList.remove("active");
  lists[1].classList.remove("active");
  lists[2].classList.add("active");
});

 */

// [.title, .title, .title].forEach()
titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    lists.forEach((list) => list.classList.remove("active"));

    // concole.log(this); 화살표 함수에서 window 객체 의미

    console.log(e.target);
    console.log(e.currentTarget);

    // 여러 title 중에 내가 클릭한 title 에만 클래스 추가
    // 내가 클릭한 요소.parentNode.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});
