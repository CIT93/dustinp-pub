//Display on page function
const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

// Created an array that contains objects of clothing items. Each object should have a name, shirt, pants, shoes, and weather associated.
const clothing = [
  {
    name: 'Hot Wardrobe',
    shirt: 'Tank-top',
    pants: 'Shorts',
    shoes: 'Sandals',
    weather: 'Hot',
  },
  {
    name: 'Warm Wardrobe',
    shirt: 'T-shirt',
    pants: 'Shorts',
    shoes: 'Sneakers',
    weather: 'Warm',
  },
  {
    name: 'Cool Wardrobe',
    shirt: 'Long-sleeve shirt',
    pants: 'Jeans',
    shoes: 'Sneakers',
    weather: 'Cool',
  },
  {
    name: 'Cold Wardrobe',
    shirt: 'Hoodie or Jacket',
    pants: 'Jeans',
    shoes: 'Boots',
    weather: 'Cold',
  },
];

// Created a function that randomizes the temp and determines the weather accordingly so weather can be used in the wardrobe function.
// Used math floor method and math random method to randomize the temp and assigned it to a variable.
// Set weather to an empty string to indicate weather is not set.
// Used if else statement to determine the weather based on the temp.
// Returned weather to be used in wardrobe function.
const weather = function () {
  let temp = Math.floor(Math.random() * 120);
  let weather = '';
  if (temp >= 96 && temp <= 120) {
    weather = 'Hot';
  } else if (temp >= 70 && temp <= 95) {
    weather = 'Warm';
  } else if (temp >= 50 && temp <= 69) {
    weather = 'Cool';
  } else {
    weather = 'Cold';
  }
  return weather;
};

// Create a function that takes in the weather as a parameter and uses a forEach loop to loop through the clothing array and return the correct wardrobe.
// Used if statement to determine if the weather matches the weather in the clothing array. If it does, return the clothing array.
// If the weather doesn't match the weather in the clothing array, increment i by 1 to select the next object in the array.
// Set wardrobe to an empty string to indicate wardrobe is not set.
// Returned wardrobe to be used in the display function.
const wardrobe = function (weather) {
  let wardrobe = '';
  clothing.forEach(function (item,) {
    if (weather === item.weather) {
      wardrobe = item;
    } else {
      item++;
    }
  });
  return wardrobe;
};


// Call the weather function and store the result in a variable.
// Call the wardrobe function and pass in the weather variable as an argument, and store the result in a variable.
// Display the wardrobe on the page using a template string and the showOnPage function calling the wardrobeResult and weatherResult variables.
let weatherResult = weather();
let wardrobeResult = wardrobe(weatherResult);
showOnPage(
  `Monday: The weather is ${weatherResult}! You should wear a ${wardrobeResult.shirt}, ${wardrobeResult.pants}, and ${wardrobeResult.shoes}.`
);



