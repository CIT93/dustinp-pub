'use strict';
 // Creating an app that lets user select a product from a dropdown list and a quantity and then multiplys the price and the quantity of that item. 
 // The app will then store that info to the local storage as an object
 // Then the app will render the ordered list of products back to the screen
  // The app will also have a button that will clear the local storage and the ordered list from the screen

document.getElementById('userInput').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let selection1 = document.getElementById('product-name1').value;
  let quantity1 = document.getElementById('product-quantity1').value;

  let selection2 = document.getElementById('product-name2').value;
  let quantity2 = document.getElementById('product-quantity2').value;

  let selection3 = document.getElementById('product-name3').value;
  let quantity3 = document.getElementById('product-quantity3').value;

 

  createProduct(selection1, quantity1);
  createProduct(selection2, quantity2);
  createProduct(selection3, quantity3);


  
  // reset the form
  document.getElementById('userInput').reset();

  // clear the error message after 3 seconds
  clearErrorMessage();
});

// Calling the prototype method to render the products to the screen

// Calling the prototype method to render the total to the screen

