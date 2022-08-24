
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
  determineClothing: function (temp) {
    if (temp >= 90) {
      return this.clothing.hot;
    } else if (temp >= 80) {
      return this.clothing.warm;
    } else if (temp >= 70) {
      return this.clothing.cool;
    } else {
      return this.clothing.cold;
    }
  }
};

    showOnPage(`Monday: ${temp.determineClothing(80)}`);
    showOnPage(`Tuesday: ${temp.determineClothing(68)}`);
    showOnPage(`Wednesday: ${temp.determineClothing(90)}`);
    showOnPage(`Thursday: ${temp.determineClothing(70)}`);
    showOnPage(`Friday: ${temp.determineClothing(45)}`);