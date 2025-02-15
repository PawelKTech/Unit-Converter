const calculateButton = document.querySelector("#calculate-button");
const navbar = document.querySelector(".navbar");
const fromSelect = document.querySelector("#convertFromInput");
const toSelect = document.querySelector("#convertToInput");
const result = document.querySelector(".result");

let chosenNavbarOption = "Length";

calculateButton.addEventListener("click", () => {
  const numberInput = document.querySelector("#number-input").value;
  const selectedFrom = fromSelect.value;
  const selectedTo = toSelect.value;

  if (numberInput != null && numberInput != 0) {
    switch (chosenNavbarOption) {
      case "Length":
        numberInput < 0
          ? (result.innerHTML = "Entered number cannot be less than 0.")
          : convertLength(numberInput, selectedFrom, selectedTo);
        break;
      case "Weight":
        numberInput < 0;

        convertWeight(numberInput, selectedFrom, selectedTo);
        break;
      case "Temperature":
        convertTemperature(numberInput, selectedFrom, selectedTo);
        break;
      default:
        console.error("Unknown option");
        break;
    }
  } else {
    result.innerHTML = "The input cannot be null or empty.";
  }
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

function convertLength(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    result.innerHTML = `The length is the same ${value} ${fromUnit}.`;
    return;
  }

  const conversionRates = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
  };
  let valueInMeters = value * (conversionRates[fromUnit] || 1);

  let convertedValue = valueInMeters / (conversionRates[toUnit] || 1);

  result.innerHTML = `Conversion ${fromUnit} to ${toUnit} is ${convertedValue} ${toUnit}`;
  return;
}

function convertWeight(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    result.innerHTML = `The weight is the same ${value} ${fromUnit}.`;
    return;
  }

  const conversionRates = {
    g: 0.001,
    kg: 1,
    ton: 1000,
  };

  let valueInKg = value * (conversionRates[fromUnit] || 1);
  let convertedValue = valueInKg / (conversionRates[toUnit] || 1);
  result.innerHTML = `Conversion ${fromUnit} to ${toUnit} is ${convertedValue} ${toUnit}`;
  return;
}

function convertTemperature(value, fromUnit, toUnit) {
  let convertedValue;
  if (fromUnit === toUnit) {
    result.innerHTML = `The temperature is the same ${value} ${fromUnit}`;
    return;
  }

  if (fromUnit === "C") {
    convertedValue = (value * 9) / 5 + 32;
  } else if (fromUnit === "F") {
    convertedValue = ((value - 32) * 5) / 9;
  } else {
    return NaN;
  }
  result.innerHTML = `Conversion ${fromUnit} to ${toUnit} is ${convertedValue} ${toUnit}.`;
  return;
}
