let isRaining = false;
let dayOfWeek = getDayOfWeek();

document.querySelector('#day-input').addEventListener('change', function (e) {
  dayOfWeek = e.target.value;
});

document.querySelector('#temp-input').addEventListener('submit', function (e) {
  e.preventDefault();

  temp = e.target.elements.userInput.value;

  if (temp === '') {
    const message = document.createElement('div');
    message.textContent = 'Please enter a temperature';
    document.getElementById('left-blank').appendChild(message);
  } else if (temp > 120 || temp < 30) {
    const error = document.createElement('div');
    error.textContent =
      'The temperature that you entered is a bit extreme! Please enter a valid temperature';
    document.getElementById('error').appendChild(error);
  } else {
    e.target.elements.userInput.value = '';

    addItem(temp, isRaining);
    renderWhatToWear();
  }
});

document
  .querySelector('#rainy-checkbox')
  .addEventListener('change', function (e) {
    isRaining = e.target.checked;
  });



// Initial Render
renderWhatToWear();

// Render every 5 seconds to update the last edited time
setInterval(function () {
  renderWhatToWear();
}, 5000);

