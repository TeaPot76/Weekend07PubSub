const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.countriesData = [];
  this.regions= [];
};

Countries.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (evt)=>{
    const selectedIndex = evt.detail;
    this.publishCountriesByContinent(selectedIndex)
  })
};

Countries.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get().then((data) => {
    this.countriesData = data;
    console.log(this.countriesData)
    PubSub.publish('Countries:countries-ready', this.countriesData);
    this.publishContinents(data);
  });
}

Countries.prototype.publishContinents = function (data) {
  this.countriesData = data;
  this.regions = this.continentsList();
  console.log(this.countriesData)
  PubSub.publish('Countries:continents-ready', this.regions);
}


Countries.prototype.list = function () {
  const fullList = this.countriesData.map(country => country.region);
  console.log(fullList)
  return fullList;

}

Countries.prototype.continentsList = function () {
  return this.list().filter((country, index, array) => {
    return array.indexOf(country) === index;
  });
}

Countries.prototype.countriesByContinent = function (selectedIndex) {
  const selectedContinent = this.regions[selectedIndex];

  return this.countriesData.filter((country) => {

    return country.region === selectedContinent;


  });
};

Countries.prototype.publishCountriesByContinent = function (selectedIndex) {
  const foundCountries = this.countriesByContinent(selectedIndex);
  PubSub.publish('Countries:countries-ready', foundCountries);
};



module.exports = Countries;
