const lists = document.querySelectorAll(".tab-menu li");
const titles = document.querySelectorAll(".title");
// const title = document.querySelector(".title");
// console.log(title);
console.log(titles);
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
  lists[1].classList.remove("active");
  lists[0].classList.remove("active");
  lists[2].classList.add("active");
});

// [.title, .title, .title].forEach()
titles.forEach((title) => {
  // title.addEventListener("click", function () {
  //   console.log(this); h2.title
  //   this.parentNode.classList.add("active");
  // });
  title.addEventListener("click", (e) => {
    lists.forEach((list) => list.classList.remove("active"));

    // console.log(this); 화살표 함수에서 window 객체
    console.log(e.target); // 내가 클릭한 그 h2.title
    console.log(e.currentTarget); // 내가 클릭한 그 요소의 리스너 h2.title
    // 수많은 title 중에 내가 클릭한 그 title에만 클래스 추가
    e.target.parentNode.classList.add("active");
  });
});
*/

const tabEvent = (e) => {
  const target = e.target;
  lists.forEach((list) => list.classList.remove("active"));
  e.target.parentNode.classList.add("active");
};

titles.forEach((title) => {
  title.addEventListener("click", tabEvent);
});

// li.addEventListener("click", tabEvent);
// menu.addEventListener("click", tabEvent);
