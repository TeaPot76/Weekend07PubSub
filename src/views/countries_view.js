const PubSub = require('../helpers/pub_sub.js');
const CountryInfoView = require('./country_info_view');

const CountriesView = function (container) {
  this.container = container;
};

CountriesView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-ready', (evt) => {
   this.clearList();
  this.renderCountryDetailView(evt.detail);
  });
};

CountriesView.prototype.clearList = function () {
  this.container.innerHTML = '';
};


CountriesView.prototype.renderCountryDetailView = function (countries) {
    countries.forEach((country) => {
    const countryItem = this.createCountryListItem(country);
    console.log(countryItem)
   this.container.appendChild(countryItem);
  });
};
//
// SelectView.prototype.populate = function (countries) {
//   countries.forEach((country, index) => {
//     const countryOption = this.createOption(country.name, index);
//     this.element.appendChild(countryOption);
//   });
// };

CountriesView.prototype.createCountryListItem = function (country) {
  const countryInfoView = new CountryInfoView();
  const countryDetail = countryInfoView.createCountryDetail(country);
  console.log(countryDetail)
  return countryDetail;


};

//
// CountriesView.prototype.clearList = function () {
//   this.container.innerHTML = '';
// };

module.exports = CountriesView;
