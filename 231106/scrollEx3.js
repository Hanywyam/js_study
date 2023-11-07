const man = document.querySelector(".man");
const title = document.querySelector(".title");
const mtLeft = document.querySelector(".mt-left");
const mtRight = document.querySelector(".mt-right");

addEventListener("scroll", () => {
  const titleHt = title.style.transform;
  console.log(titleHt);
  title.style.transform = `translateY(${scrollY}px)`;
  mtLeft.style.left = `-${scrollY / 5}px`;
  mtRight.style.left = `${scrollY / 5}px`;
  man.style.bottom = `-${scrollY / 10}px`;
});
