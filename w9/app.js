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

let whatToWear = getSavedWardrobe();
let isRaining = false;
let dayOfWeek = getDayOfWeek();

document.querySelector('#day-input').addEventListener('change', function (e) {
  dayOfWeek = e.target.value;
});

document.querySelector('#temp-input').addEventListener('submit', function (e) {
  e.preventDefault();
  temp = e.target.elements.userInput.value;
  if (temp > 120 || temp < 30) {
   const error = document.createElement('div');
   error.textContent =
      'The temperature that you entered is a bit extreme! Please enter a valid temperature';
    document.getElementById('error').appendChild(error);
  } else {
    let weatherVariable = weather(temp);
    let wardrobeVariable = wardrobe(weatherVariable);
    e.target.elements.userInput.value = '';
    let wardrobeObject = {
      id: uuidv4(),
      temp: temp,
      weather: weatherVariable,
      wardrobe: wardrobeVariable,
      day: dayOfWeek,
      rain: isRaining,
    };
    whatToWear.push(wardrobeObject);
    savedWardrobe();
    renderWhatToWear();
  }
});

document
  .querySelector('#rainy-checkbox')
  .addEventListener('change', function (e) {
    isRaining = e.target.checked;
  });

renderWhatToWear();
