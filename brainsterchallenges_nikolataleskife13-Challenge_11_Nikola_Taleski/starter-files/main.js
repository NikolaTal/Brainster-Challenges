inputText = document.querySelector(".input_text");
let buttons = document.querySelectorAll(".keyboard_button");
let space_button = document.querySelector(".space");
let delete_button = document.querySelector(".delete");

let emptyArray = [];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputText.textContent += button.textContent.toLowerCase();
    emptyArray = inputText.textContent.split("");
  });
});

space_button.addEventListener("click", () => {
  inputText.textContent += "\xa0";
});

delete_button.addEventListener("click", () => {
  emptyArray.pop();
  inputText.textContent = emptyArray.join("");
});
