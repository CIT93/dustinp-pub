//Display on page function
const showOnPage = function (text) {
  let newParagraph = document.createElement('p');
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById('output');
  outputDiv.append(newParagraph);
};

//Creating an object called temp that contains the different types of clothing that can be worn.
//Using a method to determine the temperature and select what clothing to wear based on the temp.

const temp = {
  clothing: {
    hot: 'It is hot, you should wear Shorts, and a Tank top,',
    warm: 'It is warm, you should wear Shorts, and a Shirt',
    cool: 'It is cool, you should wear a Jeans, and a Shirt',
    cold: 'It is cold, you should wear a Jeans, a Shirt, and a Jacket',
  },
  getTemp: function (temp) {
    this.temperature = temp;
  },
  whatToWear: '',

  determineClothing: function (temp) {
    if (temp >= 90 && temp <= 120) {
      this.whatToWear = this.clothing.hot;
    } else if (temp >= 80 && temp <= 89) {
      this.whatToWear = this.clothing.warm;
    } else if (temp >= 60 && temp <= 79) {
      this.whatToWear = this.clothing.cool;
    } else {
      this.whatToWear = this.clothing.cold;
    }
  },
};
temp.determineClothing(80);
showOnPage(`Monday: ${temp.whatToWear}`);

temp.determineClothing(68);
showOnPage(`Tuesday: ${temp.whatToWear}`);

temp.determineClothing(90);
showOnPage(`Wednesday: ${temp.whatToWear}`);

temp.determineClothing(70);
showOnPage(`Thursday: ${temp.whatToWear}`);

temp.determineClothing(45);
showOnPage(`Friday: ${temp.whatToWear}`);
