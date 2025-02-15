const calculateButton = document.querySelector("#calculate-button");
const navbar = document.querySelector(".navbar");
const fromSelect = document.querySelector("#convertFromInput");
const toSelect = document.querySelector("#convertToInput");

let chosenNavbarOption = "Length";

calculateButton.addEventListener("click", () => {
  const numberInput = document.querySelector("#number-input").value;
  const selectedFrom = fromSelect.value;
  const selectedTo = toSelect.value;

  console.log(`${numberInput} ${selectedFrom} ${selectedTo}`);
});

navbar.addEventListener("click", (event) => {
  if (event.target.classList.contains("navbar_option")) {
    chosenNavbarOption = event.target.innerText;

    toggleVisibility(chosenNavbarOption.toLowerCase());
    updateSelects(chosenNavbarOption.toLowerCase());
  }
});

function toggleVisibility(option) {
  const categories = ["temperature", "length", "weight"];

  categories.forEach((category) => {
    document.querySelectorAll(`.${category}`).forEach((el) => {
      el.style.display = category === option ? "block" : "none";
    });
  });
}

function updateSelects(category) {
  const firstOptionFrom = fromSelect.querySelector(`.${category}`);
  const firstOptionTo = toSelect.querySelector(`.${category}`);

  if (firstOptionFrom) fromSelect.value = firstOptionFrom.value;
  if (firstOptionTo) toSelect.value = firstOptionTo.value;
}
