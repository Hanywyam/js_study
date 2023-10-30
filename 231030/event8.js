/* 
  event.target
    실제 이벤트가 발생하는 요소를 반환. 이벤트 리스너가 등록되어 있는 자식 요소 반환

  event.currentTarget
    이벤트 리스너가 있는 요소를 반환. 이벤트를 등록해 놓은 요소 반환(일반적으로는 버튼)
*/

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const ul = document.querySelector("ul");
const list = document.querySelector("li");
const link = document.querySelector("a");

// box1에 이벤트 바인딩 binding
box1.addEventListener("click", (evt) => {
  console.log(`target -> ${evt.target.tagName}`);
  console.log(`currentTarget -> ${evt.currentTarget.tagName}`);
});
/* 
  box1에 이벤트 binding한 상태에서
  box1 클릭 : target-> div, currentTarget -> div
  h1 클릭 : target -> H1(실제 이벤트 발생 지점), currentTarget -> DIV(이벤트 리스너)
  h2 클릭 : target -> H2, currentTarget -> DIV
*/

box2.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(`target -> ${e.target.tagName}`);
  console.log(`currentTarget -> ${e.currentTarget.tagName}`);
  /* 
    box2 : target -> div, currentTarget -> div
    ul : target -> UL, currentTarget -> DIV
    li : target -> LI, currentTarget -> DIV
    a: target -> a, currentTarget -> DIV
  */

  // e.target.style.backgroundColor = "tomato";
  const target = e.target;
  target.style.color = "#fff";
  target.style.backgroundColor = "tomato";
});
