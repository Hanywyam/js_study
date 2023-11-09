const main = document.querySelector("main");
const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

// main 높이값 계산
const mainHt = () => {
  main.style.height = `${
    main.offsetHeight - nav.offsetHeight - footer.offsetHeight
  }px`;
  main.style.marginTop = `${nav.offsetHeight}px`;
};
mainHt();
addEventListener("resize", mainHt);

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 600,
  parallax: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    720: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const menuLi = document.querySelectorAll("a");

menuLi.forEach((menu, idx) => {
  // 메뉴를 클릭하면 해당 메뉴에만 .colorOn 붙게
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    menuLi.forEach((a) => {
      a.classList.remove("colorOn");
    });
    e.target.classList.add("colorOn");
    // 메뉴를 클릭하면 해당 스와이퍼로 이동
    swiper.slideToLoop(idx, 500);
  });
});

/* 챗지피티 답변스
const menuItems = document.querySelectorAll(".menu-bar a");

menuItems.forEach(function (menuItem, index) {
  menuItem.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 클릭 동작을 막습니다.
    var slideIndex = index;
    swiper.slideTo(slideIndex); // 클릭한 메뉴에 해당하는 슬라이드로 이동합니다.
  });
});
 */
