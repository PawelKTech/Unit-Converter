let options = document.querySelectorAll(".option");
let result = document.querySelector(".result");
let lengthinput = document.querySelector("#length");
let convertFromInput = document.querySelector("#convertFromInput");
let convertToInput = document.querySelector("#convertToInput");
let choosenUnit = "length";

options.forEach((element) => {
  element.addEventListener("click", () => {
    choosenUnit = element.innerHTML;
    console.log(choosenUnit);
  });
});
