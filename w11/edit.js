const wardrobeId = location.hash.substring(1);

// Check if this is a valid wardrobe ID
// Arrow function worked here for shorthand syntax due to just retuning a value
const wardrobes = getSavedWardrobe();
const item = wardrobes.find((wardrobe) => wardrobe.id === wardrobeId);

if (!item) {
  location.assign('index.html');
}

editInput = document.getElementById('edited-temp');
editInput.addEventListener('change', (e) => {
  const temp = e.target.value;
  editItem(wardrobeId, temp, false); // use value from an actual checkbox, don't just pass in false
});

editButton = document.getElementById('edit-button');
editButton.addEventListener('click', (e) => {
  const temp = editInput.value;
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
  location.assign(`index.html`);
  }
});
