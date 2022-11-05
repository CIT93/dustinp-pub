'use strict';
let orderList = [];

class Products {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.price = this.randomPrice();
  }

  randomPrice() {
    return Math.floor(Math.random() * 100);
  }

  multiplyProducts() {
    return this.quantity * this.price;
  }

  totalProducts() {
    let total = 0;
    for (let i = 0; i < orderList.length; i++) {
      total += orderList[i].multiplyProducts();
    }
    return total;
  }

  renderTotal() {
    if (orderList === undefined) {
      return;
    } else {
      let total = document.getElementById('total');
      total.textContent = `The total for your order is: $${this.totalProducts().toFixed(2)}`;
    }
  }

  renderProducts() {
    if (orderList === undefined) {
      return;
    } else {
      let ul = document.getElementById('ordered-list');
      ul.textContent = '';
      for (let i = 0; i < orderList.length; i++) {
        let li = document.createElement('li');
        li.textContent = `You have ordered ${
          orderList[i].name
        } in the quantity of ${
          orderList[i].quantity
        } for a total price of $${orderList[i].multiplyProducts().toFixed(2)}`;
        ul.appendChild(li);
      }
    }
    this.renderTotal();
  }
}

const clearErrorMessage = () => {
  setTimeout(function () {
    let error = document.getElementById('error');
    error.textContent = '';
  }, 3000);
};

const createProduct = (name, quantity) => {
  // created if statement to check if the user has entered a product and quantity for all three fields
  if (!name || !quantity) {
    let error = document.getElementById('error');
    error.textContent = 'Please enter a product and quantity';
    clearErrorMessage();
  } else {
    let product = new Products(name, quantity);
    orderList.push(product);
    product.renderProducts();
    product.renderTotal();
    console.log(orderList);
  }
};


