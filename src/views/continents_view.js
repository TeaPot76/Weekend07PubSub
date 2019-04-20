const PubSub = require('../helpers/pub_sub.js');
const CountryInfoView = require('./country_info_view');

const ContinentsView = function(container) {
  this.container = container;
};

ContinentsView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:countries-ready', (evt) => {
    this.clearList();
    this.renderCountryDetailView(evt.detail);
  });
};

ContinentsView.prototype.clearList = function() {
  this.container.innerHTML = '';
};

ContinentsView.prototype.renderCountryDetailView = function(countries) {
  countries.forEach((country) => {
    const countryItem = this.createCountryListItem(country);
    console.log(countryItem)
    this.container.appendChild(countryItem);
  });
};

ContinentsView.prototype.createCountryListItem = function(country) {
  const countryInfoView = new CountryInfoView();
  const countryDetail = countryInfoView.createCountryDetail(country);
  console.log(countryDetail)
  return countryDetail;
};




module.exports = ContinentsView;
