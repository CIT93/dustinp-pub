

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
  clothing.forEach(function (clothing) {
    if (weather === clothing.weather) {
      wardrobe = clothing;
    } else {
      clothing++;
    }
  });
  return wardrobe;
};




// Created a button using the DOM and createElement method.
// Set the button text to "What should I wear?" using textContent method.
// Created an event listener on the button that when the button is clicked, will set the weatherVariable to the weather function and the wardrobeVariable to the wardrobe function.
// Used getElementById method to select the div with the id of "output" and used the innerHTML method to display the weather and wardrobe with a template string.
const button = document.createElement('button');
button.textContent = 'what should I wear?';
button.addEventListener('click', function (event) {
  let weatherVariable = weather();
  let wardrobeVariable = wardrobe(weatherVariable);
 document.getElementById('output').innerHTML = `The weather is ${weatherVariable} and you should wear a ${wardrobeVariable.shirt}, ${wardrobeVariable.pants}, and ${wardrobeVariable.shoes}.`;
});
// Append the button to the body.
document.body.appendChild(button);




