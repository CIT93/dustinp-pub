'use strict';
 // Creating an app that lets user select a product from a dropdown list and a quantity and then multiplys the price and the quantity of that item. 
 // The app will then store that info to the local storage as an object
 // Then the app will render the ordered list of products back to the screen
  // The app will also have a button that will clear the local storage and the ordered list from the screen

document.getElementById('userInput').addEventListener('submit', function(e) {
  e.preventDefault();
  
  let name = document.getElementById('product-name').value;
  let quantity = document.getElementById('product-quantity').value;

 

  let product = createProduct(name, quantity);

  orderList.push(product);

  
  // calling prototype method to save the products to local storage
  product.saveToLocalStorage();
  // calling prototype method to render the products to the screen
  product.renderProducts();
  // calling prototype method to render the total to the screen
  product.renderTotal();
});

// Calling the prototype method to render the products to the screen
product.renderProducts();
// Calling the prototype method to render the total to the screen
product.renderTotal();

