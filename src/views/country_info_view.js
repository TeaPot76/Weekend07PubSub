const CountryInfoView = function () {};

CountryInfoView.prototype.createCountryDetail = function (country) {
  const countryDetail = document.createElement('div');
  countryDetail.classList.add('country-detail');
  
  const region = document.createElement('h3');
  region.textContent = country.region;
  countryDetail.appendChild(region);

  const countryName = document.createElement('h3');
  countryName.textContent = country.name;
  countryDetail.appendChild(countryName);

  const detailsList = document.createElement('ul');
  const subregion = this.createDetailListItem('subregion', country.subregion);
  detailsList.appendChild(subregion);

  const area = this.createDetailListItem('area', country.area)
  detailsList.appendChild(area);

  countryDetail.appendChild(detailsList);
  return countryDetail;
};

CountryInfoView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = CountryInfoView;
