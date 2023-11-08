const horizWrap = document.querySelector(".horizontal-wrap");
const stickyBox = document.querySelector(".sticky-box");
const horizBox = document.querySelector(".horizontal-box");

const calcHt = (ht) => {
  return (
    ht.scrollWidth -
    document.documentElement.clientWidth +
    document.documentElement.clientHeight
  );
};

horizWrap.style.height = `${calcHt(horizBox)}px`;

const scrolled = () => {
  console.log(stickyBox.offsetTop);
  console.log(stickyBox.offsetParent);
  // 1. 기본: parent == body
  // 2. 기준 변경: parent == horizontal-wrap (position 기본값을 줌)

  horizBox.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
};

addEventListener("scroll", scrolled);

/* 
  .offsetTop;
  offsetParent를 기준으로 거리를 알려줌
  offset은 offsetParent의 가장 가까운 포지션을 기준으로 거리값 반환
  부모 요소에 position값이 따로 없는 경우 body 기준
*/
