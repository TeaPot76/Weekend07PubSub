const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const CountriesView = require('./views/countries_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#continent-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#country-list');
  const countriesView = new CountriesView(listContainer);
  countriesView.bindEvents();

  const countries = new Countries;
  countries.bindEvents();
  countries.getData();
});
