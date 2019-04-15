const PubSub = require('../helpers/pub_sub.js');

const SelectCountry = function(element) {
  this.element = element;
};

 SelectCountry.prototype.bindEvents = function () {
  this.element.addEventListener('change', (evt) => {
  const selectedIndex = evt.target.value;
  PubSub.publish('SelectCountry:change', selectedIndex);
  });
};

SelectCountry.prototype.populateSelect = function (regions) {
   regions.forEach((region, index) => {
    const option = this.createCountryOption(name, index);
    this.element.appendChild(option);
  })
};

SelectCountry.prototype.createCountryOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
  console.log(option)
};



module.exports = SelectCountry;
