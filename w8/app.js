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

let whatToWear = [];
let isRaining = false;
// Created a function that randomizes the temp and determines the weather accordingly so weather can be used in the wardrobe function.
// Used math floor method and math random method to randomize the temp and assigned it to a variable.
// Set weather to an empty string to indicate weather is not set.
// Used if else statement to determine the weather based on the temp.
// Returned weather to be used in wardrobe function.
const weather = function () {
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
// append output id to the DOM
 const renderWhatToWear = function () {
  if (isRaining === true) {
    document.querySelector('#output').innerHTML =
      'It is raining, stay inside and watch netflix';
  } else {
    document.querySelector('#output').innerHTML = '';
    whatToWear.forEach(function (whatToWear) {
      const div = document.createElement('div');
      div.textContent = `It is ${whatToWear.weather} outside. You should wear ${whatToWear.shirt} ${whatToWear.pants} and ${whatToWear.shoes}.`;
      document.getElementById('output').appendChild(div);
    });
  }
};

document.querySelector('#temp-input').addEventListener('submit', function (e) {
  e.preventDefault();
  temp = e.target.elements.userInput.value;
  let weatherVariable = weather(temp);
  let wardrobeVariable = wardrobe(weatherVariable);
  e.target.elements.userInput.value = '';
  whatToWear.push(wardrobeVariable);
  renderWhatToWear();
});

document
  .querySelector('#rainy-checkbox')
  .addEventListener('change', function (e) {
    isRaining = e.target.checked;
  });
