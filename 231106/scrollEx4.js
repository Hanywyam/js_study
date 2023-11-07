const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const blobalMenu = document.querySelector(".gnb");

// 스크롤에 따른 nav 변화
addEventListener("scroll", () => {
  // 방법 1
  // if(){

  // } else {

  // }
  // 방법 2
  const contents1 = document.querySelector(".box1").offsetTop / 2;
  nav.classList.toggle("active", scrollY > contents1);
});

// 로고 클릭 시 맨 위로 이동
logo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 해당 박스로 부드러운 이동
const globalMenuA = document.querySelectorAll(".gnb a");

// globalMenuA[0].addEventListener("click",()=>{scrollTop;});
// globalMenuA[0].addEventListener("click",()=>{scrollTo({top:??});});

globalMenuA.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    const boxes = document.querySelectorAll(".bg-item");
    const getBox = boxes[idx].offsetTop - 100;
    scrollTo({
      top: getBox,
      behavior: "smooth",
    });
  });
});

// 모바일 토글 버튼
const toggleIcon = document.querySelector(".toggle-icon");
const globalMenuList = document.querySelectorAll(".gnb li");

// toggleIcon.addEventListener("click", function () {
//   this.classList.toggle("close-icon"); //화살표함수에서는 this 못사용
//   blobalMenu.classList.toggle("show-menu");
// });

toggleIcon.addEventListener("click", (e) => {
  // const target = e.target;  내가 클릭한 그것
  const target = e.currentTarget; // 내가 클릭한(addEventListener) 영역(toggleIcon)
  target.classList.toggle("close-icon");
  blobalMenu.classList.toggle("show-menu");

  // 해당메뉴 클릭시 메뉴 닫힘

  globalMenuList.forEach((li) => {
    li.addEventListener("click", () => {
      target.classList.remove("close-icon");
      blobalMenu.classList.remove("show-menu");
    });
  });
});
