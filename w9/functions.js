const getDayOfWeek = function () {
  const dayOfWeek = document.querySelector('#day-input').value;
  return dayOfWeek;
};

const savedWardrobe = function () {
  localStorage.setItem('whatToWear', JSON.stringify(whatToWear));
};

const getSavedWardrobe = function () {
  const whatToWearJSON = localStorage.getItem('whatToWear');
  if (whatToWearJSON !== null) {
    return JSON.parse(whatToWearJSON);
  } else {
    return [];
  }
};

const removeWardrobe = function (id) {
  const wardrobeIndex = whatToWear.findIndex(function (wardrobe) {
    return wardrobe.id === id;
  });
  if (wardrobeIndex > -1) {
    whatToWear.splice(wardrobeIndex, 1);
    savedWardrobe();
    renderWhatToWear();
  }
};

// Created a function that takes in the temp and returns the weather
const weather = function (temp) {
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

// created a function called renderWhatToWear that if it is raining displays that it is raining you should wear a raincoat and stores it to local storage
// if it is not raining it displays the weather and wardrobe
const renderWhatToWear = function () {
  document.querySelector('#output').innerHTML = '';
  whatToWear.forEach(function (whatToWear) {
    const div = document.createElement('div');

    if (whatToWear.rain === true) {
      div.textContent = `It is raining, stay inside and watch netflix`;
    } else {
      div.textContent = `It is ${whatToWear.day}. It is ${whatToWear.weather} outside. You should wear ${whatToWear.wardrobe.shirt} ${whatToWear.wardrobe.pants} and ${whatToWear.wardrobe.shoes}.`;
    }

    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', function () {
      removeWardrobe(whatToWear.id);
    });
    div.appendChild(button);
    document.getElementById('output').appendChild(div);
  });
};
