'use strict';
let orderList = [];

// constructor function to create new instances of products objects
const Products = function (name, quantity)  {
  this.name = name;
  this.quantity = quantity;
  this.price = this.randomPrice();
};

// Created a function using the prototype method to save the products to local storage
Products.prototype.saveToLocalStorage = function() {
  let data = JSON.stringify(orderList);
  localStorage.setItem('products', data);
}; 


// created function using the prototype method to randomize the price of the products
Products.prototype.randomPrice = function() {
  return Math.floor(Math.random() * 100);
};

// Created a function using the prototype method to multiply the price and the quantity of the products
Products.prototype.multiplyProducts = function() {
  return this.price * this.quantity;
};

// function to create new instances of products objects
const createProduct = (name, quantity,) =>{
  let product = new Products(name, quantity);
  return product;
}


// Created a function using the prototype method to get the products from local storage
Products.prototype.getProducts = function() {
  let stringObj = localStorage.getItem('products');
  let normalObj = JSON.parse(stringObj);
  if (normalObj) {
    orderList = normalObj;
  }else {
    orderList = [];
  }
};

// Created a fucntion using the prototype method to add up all the products and give a running total of them
Products.prototype.totalProducts = function() {
  let total = 0;
  for (let i = 0; i < orderList.length; i++) {
    total += orderList[i].multiplyProducts();
  }
  return total;
};

// created a function using the prototype method to render the total to the screen
Products.prototype.renderTotal = function() {
  let total = document.getElementById('total');
  total.textContent = `The total for your order is: $${this.totalProducts()}`;
};

// Created a function using the prototype method to render the products to the screen
Products.prototype.renderProducts = function() {
  let orderedList = document.getElementById('ordered-list');
  orderedList.innerHTML = '';
  for (let i = 0; i < orderList.length; i++) {
    let liEl = document.createElement('li');
    orderedList.appendChild(liEl);
    liEl.textContent = `You have ordered ${orderList[i].name} in the quantity of ${orderList[i].quantity} for a total of $${orderList[i].multiplyProducts()}`;
  }
};

