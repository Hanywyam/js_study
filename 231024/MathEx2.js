/* 
function randomClr() {
  document.body.style.backgroundColor = 
  "rgb(
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255)
  )";
}
 */

/* 
// 문서 준비 이벤트
window.onload = function () {};
window.addEventListener("DOMContentLoaded", function(){});

//옛날 버전 버튼 이벤트
document.getElementById("btn").click(function () {});
document.getElementById("btn").on("click", function () {}); 
*/

// const btn = document.querySelector('.btn');
const btn = document.querySelector("#btn");

// btn.on('click', function () {});
// btn.click(function () {});

//에크마 표준 모델
btn.addEventListener("click", function () {
  //콜백 함수
  // 0~255 random
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ranColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = ranColor;
});

const bgColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ranColor = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = ranColor;
};

document.querySelector("#btn1").addEventListener("click", bgColor);
