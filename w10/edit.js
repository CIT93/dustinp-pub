const wardrobeId = location.hash.substring(1);

// Check if this is a valid wardrobe ID
const wardrobes = getSavedWardrobe();
const item = wardrobes.find(function (wardrobe) {
  return wardrobe.id === wardrobeId;
});

if (item === undefined) {
  location.assign('index.html');
}

editInput = document.getElementById('edited-temp');
editInput.addEventListener('change', function (e) {
  const temp = e.target.value;
  editItem(wardrobeId, temp, false); // use value from an actual checkbox, don't just pass in false
});

editButton = document.getElementById('edit-button');
editButton.addEventListener('click', function (e) {
    location.assign(`index.html`);
});