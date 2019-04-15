const CountryInfoView = function () {};

CountryInfoView.prototype.createCountryDetail = function (country) {
  const countryDetail = document.createElement('div');
  countryDetail.classList.add('country-list');

  const countryName = document.createElement('h3');
  countryName.textContent = country.name;
  countryDetail.appendChild(countryName);

  const detailsList = document.createElement('ul');
  const subregion = this.createDetailListItem('subregion', country.subregion);
  detailsList.appendChild(subregion);

  const area = this.createDetailListItem('area', country.area)
  detailsList.appendChild(area);

  const languagesListTitle = this.createTextElement('h3', 'Languages:');
  detailsList.appendChild(languagesListTitle);

  const languagesList = document.createElement('ul');
  this.populateLanguageList(country.languages, languagesList);
  detailsList.appendChild(languagesList);

  const flagImage = document.createElement('img');
  flagImage.src = country.flag;
  countryDetail.appendChild(flagImage);


  countryDetail.appendChild(detailsList);
  return countryDetail;
};

  CountryInfoView.prototype.createCountriesDetail = function (country) {
  const countriesDetail = document.createElement('div');
  countriesDetail.classList.add('country-detail');

  const countryName = document.createElement('h3');
  countryName.textContent = country.name;
  countriesDetail.appendChild(countryName);

  const detailsList = document.createElement('ul');
  const subregion = this.createDetailListItem('subregion', country.subregion);
  detailsList.appendChild(subregion);

  const area = this.createDetailListItem('area', country.area)
  detailsList.appendChild(area);

  const languagesListTitle = this.createTextElement('h3', 'Languages:');
  detailsList.appendChild(languagesListTitle);

  const languagesList = document.createElement('ul');
  this.populateLanguageList(country.languages, languagesList);
  detailsList.appendChild(languagesList);

  const flagImage = document.createElement('img');
  flagImage.src = country.flag;
  countriesDetail.appendChild(flagImage);

  countriesDetail.appendChild(detailsList);
  return countriesDetail;
};

CountryInfoView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

CountryInfoView.prototype.createTextElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

CountryInfoView.prototype.populateLanguageList = function (languages, list) {
  languages.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });
};


module.exports = CountryInfoView;
