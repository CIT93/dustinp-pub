
// Display on page function
const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

// created function to determine if it is daytime or night time based on the hour
let timeDecision = function (hour = 10) {
  if (hour >= 6 && hour <= 20) {
   return showOnPage(tempDecision(80));
  } else {
    return showOnPage('It is night time, go back to bed.');
  }
}

// Most common decision that I make every day is to check the temp and decide what I should wear based on that information.
// Created function to run logic for chosing clothes based on temp information
// make sure that function has a return value
let tempDecision = function (temp) {
  // if else statement to check for temp and return appropriate clothing
  if (temp >= 90 && temp <= 120) {
    let wearShorts = 'You should wear shorts';
    let wearTank = 'You should wear a tank top';
    return `It's hot outside, ${wearShorts}, and ${wearTank}.`;
  } else if (temp >= 70 && temp <= 89) {
    let wearShorts = 'You should wear shorts';
    let wearTshirt = 'You should wear a shirt';
    return `It's nice outside, ${wearShorts}, and ${wearTshirt}.`;
  } else if (temp >= 69 && temp <= 40) {
    let wearPants = 'You should wear pants';
    let wearTshirt = 'You should wear a shirt';
    let wearHoodie = 'You should also wear a hoodie';
    return `It's cold outside, ${wearPants}, and ${wearTshirt}, and ${wearHoodie}.`;
  } else {
    return 'It is not a good time to be outside.';
  }
};
timeDecision();

/*
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
*/
