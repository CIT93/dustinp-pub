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
  location.assign(`index.html`);
});
