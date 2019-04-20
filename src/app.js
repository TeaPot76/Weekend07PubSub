const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ContinentsView = require('./views/continents_view.js');
// const SelectCountry= require('./views/select_country.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('select#continent-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const listContainer = document.querySelector('#country-list');
  const continentsView = new ContinentsView(listContainer);
  continentsView.bindEvents();

  // const element = document.querySelector('select#country-select');
  // const menuView = new SelectCountry(element);
  // menuView.bindEvents();

  const countries = new Countries;
  countries.bindEvents();
  countries.getData();
});
