const PubSub = require('../helpers/pub_sub');

const SelectView = function (selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:continents-ready', (evt) => {
    this.populateSelect(evt.detail);
  });

  this.selectElement.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log(selectedIndex)
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function (regions) {
  regions.forEach((region, index) => {
    const option = this.createContinentOption(region, index);
    this.selectElement.appendChild(option);
  });
};

SelectView.prototype.createContinentOption = function (region, index) {
  const option = document.createElement('option');
  option.textContent = region;
  option.value = index;
  return option;
  console.log(option)
};

module.exports = SelectView;
