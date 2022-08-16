// Display on page function
const showOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// Most common decision that I make every day is to check the temp and decide what I should wear based on that information.

// Global Variables
let temp = 39;
let isWearHoodie = false;
let isWearShorts = false;
let isWearTankTop = false;
let isWearTshirt = false;
let isWearPants = false;
// if else statements to determine what to wear using the temp variable and the isWear variables as well as and or operators.
if (temp >= 90 && temp <= 120) {
  isWearShorts = true;
  isWearTankTop = true;

  showOnPage("You should wear shorts and a tank top.");
} else if (temp >= 70 && temp <= 89) {
  isWearShorts = true;
  isWearTshirt = true;

  showOnPage("You should wear shorts and a t-shirt.");
} else if (temp <= 69 && temp >= 40) {
  isWearPants = true;
  isWearTshirt = true;
  isWearHoodie = true;
  showOnPage("You should wear a hoodie, pants and a t-shirt.");
} else {
  showOnPage("You should just stay inside.");
}
