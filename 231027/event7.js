const label = document.querySelector("label");
const txtInput = document.querySelector("input[type=text]");

txtInput.addEventListener("focus", () => console.log("커서가 깜빡거립니다"));
txtInput.addEventListener("blur", () =>
  console.log("텍스트 필드에서 포커스 사라짐")
);
txtInput.addEventListener("submit", (e) => e.preventDefault()); //입력한 정보 초기화(기본) -> 기본 성격 삭제: 작성한 내용그대로 유지.
txtInput.addEventListener("change", () => alert("내용이 변경되었습니다."));
