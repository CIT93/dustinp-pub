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

const getDayOfWeek = function () {
  const dayOfWeek = document.querySelector('#day-input').value;
  return dayOfWeek;
};

const saveWardrobe = function (whatToWear) {
  // Handle bad input
  if (!whatToWear) {
    return;
  }

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
  const whatToWear = getSavedWardrobe();

  const wardrobeIndex = whatToWear.findIndex(function (wardrobe) {
    return wardrobe.id === id;
  });
  if (wardrobeIndex > -1) {
    whatToWear.splice(wardrobeIndex, 1);
    saveWardrobe(whatToWear);
    renderWhatToWear();
  }
};

// created a function called generateEdited that returns a timestamp of last edited time
const generateEdited = function (timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`;
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

const addItem = function (temp, isRaining) {
  const whatToWear = getSavedWardrobe();

  let weatherVariable = weather(temp);
  let wardrobeVariable = wardrobe(weatherVariable);

  const id = uuidv4();

  let item = {
    id: id,
    temp: temp,
    weather: weatherVariable,
    wardrobe: wardrobeVariable,
    day: dayOfWeek,
    rain: isRaining,
    lastEdited: moment().unix(),
  };

  whatToWear.push(item);
  saveWardrobe(whatToWear);
};

const editItem = function (id, temp, isRaining) {
  const whatToWear = getSavedWardrobe();

  // Get item index
  const itemIndex = whatToWear.findIndex(function (i) {
    return i.id === id;
  });

  if (itemIndex === -1) {
    return;
  }

  let item = whatToWear[itemIndex];

  let weatherVariable = weather(temp);
  let wardrobeVariable = wardrobe(weatherVariable);

  item.temp = temp;
  item.weather = weatherVariable;
  item.wardrobe = wardrobeVariable;
  item.lastEdited = moment().unix();
  item.rain = isRaining;

  whatToWear[itemIndex] = item;
  saveWardrobe(whatToWear);
};

// created a function called renderWhatToWear that if it is raining displays that it is raining you should wear a raincoat and stores it to local storage
// if it is not raining it displays the weather and wardrobe
const renderWhatToWear = function () {
  const whatToWear = getSavedWardrobe();

  document.querySelector('#output').innerHTML = '';
  whatToWear.forEach(function (whatToWear) {
    const div = document.createElement('div');
    div.className = 'item';

    if (whatToWear.rain === true) {
      div.textContent = `It is raining, stay inside and watch netflix`;
    } else {
      div.textContent = `It is ${whatToWear.day}. It is ${whatToWear.weather} outside. You should wear ${whatToWear.wardrobe.shirt} ${whatToWear.wardrobe.pants} and ${whatToWear.wardrobe.shoes}.`;
    }

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    div.appendChild(editButton);
    editButton.addEventListener('click', function () {
      location.assign(`edit-input.html#${whatToWear.id}`);
    });

    const button = document.createElement('button');
    button.textContent = 'x';
    button.addEventListener('click', function () {
      removeWardrobe(whatToWear.id);
    });
    div.appendChild(button);
    document.getElementById('output').appendChild(div);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'last-edited';

    timeDiv.textContent = `Last edited ${moment
      .unix(whatToWear.lastEdited)
      .fromNow()}`;
    div.appendChild(timeDiv);
  });
};
