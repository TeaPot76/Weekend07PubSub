const PubSub = require('../helpers/pub_sub.js');
const CountryInfoView = require('./country_info_view');

const CountriesView = function (container) {
  this.detailContainer = container;
};

CountriesView.prototype.bindEvents = function () {
  PubSub.subscribe('SelectCountry:countries-ready', (evt) => {
   this.clearList();
  this.renderCountriesDetailView(evt.detail);
});
};

CountriesView.prototype.clearList = function () {
  this.detailContainer.innerHTML = '';
};



CountriesView.prototype.renderCountriesDetailView = function (countries) {
    countries.forEach((country) => {
    const countryItem = this.createCountryListItem(country);
    console.log(countryItem)
   this.container.appendChild(countryItem);
  });
};

CountriesView.prototype.createCountryListItem = function (country) {
  const countryInfoView2 = new CountryInfoView();
  const countriesDetail = countryInfoView.createCountryDetail(country);
  console.log(countriesDetail)
  return countriesDetail;

};


module.exports = CountriesView;
