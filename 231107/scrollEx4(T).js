const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const globalMenu = document.querySelector(".global-menu");

// 스크롤에 따른 nav 변화
addEventListener("scroll", () => {
  const contents1 = document.querySelector(".contents1").offsetTop / 2;
  console.log(contents1);
  const headerHt = document.querySelector(".header-box").offsetTop;

  // nav.classList.toggle("active", scrollY > headerHt);

  if (scrollY > headerHt) {
    nav.classList.add("active");
    globalMenu.style.top = "100px";
  } else {
    nav.classList.remove("active");
    globalMenu.style.top = "160px";
  }
});

// 로고 클릭시 맨 위로 이동
logo.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 해당 박스로 부드러운 이동

const globalMenuA = document.querySelectorAll(".global-menu a");

// globalMenuA[0].addEventListener("click", () => {scrollTop();});
// globalMenuA[0].addEventListener("click", () => {scrollTo({top: ???, behavior:"smooth"})});

globalMenuA.forEach((item, idx) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();

    const boxes = document.querySelectorAll("article");
    const getBox = boxes[idx].offsetTop - 100;
    scrollTo({
      top: getBox,
      behavior: "smooth",
    });
  });
});

// 모바일 토글 버튼
const toggleIcon = document.querySelector(".toggle-icon");
const globalMenuList = document.querySelectorAll(".global-menu li");

// toggleIcon.addEventListener("click", function () {
//   this.classList.toggle("close-icon");
//   globalMenu.classList.toggle("show-menu");
// });

toggleIcon.addEventListener("click", (evt) => {
  const target = evt.currentTarget;

  target.classList.toggle("close-icon");
  globalMenu.classList.toggle("show-menu");

  // 해당 메뉴 클릭시 메뉴 닫힘
  // 모든 li를 순회하며, li를 클릭하면 메뉴 아이콘과 메뉴의 클래스 제거
  globalMenuList.forEach((li) => {
    li.addEventListener("click", () => {
      target.classList.remove("close-icon");
      globalMenu.classList.remove("show-menu");
    });
  });
});
