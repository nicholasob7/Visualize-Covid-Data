const api = {
  getContinentsData: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/continents");
    return await response.json();
  },

  getCountriesData: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    return await response.json();
  },

  getVaccineCountriesData: async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/vaccine/countries"
    );
    return await response.json();
  },

  getHistoricalData: async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return await response.json();
  },

  getCoverageData: async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all&fullData=true"
    );
    return await response.json();
  },

  getAllData: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    return await response.json();
  },

  getBiggestNorthAmerica: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/historical/USA%2C%20Mexico%2CCanada%2C%20Guatemala%2C%20Cuba?lastdays=1s");
    return await response.json();
  },

  getBiggestSouthAmerica: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/Brazil%2C%20Colombia%2C%20Argentina");
    return await response.json();
  },

  getBiggestEurope: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/Russia%2C%20Germany%2C%20Turkey");
    return await response.json();
  },

  getBiggestAsia: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/China%2C%20India%2C%20Indonesia");
    return await response.json();
  },

  getBiggestAfrica: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/Nigeria%2C%20Ethiopia%2C%20Egypt");
    return await response.json();
  },

  getBiggestAustraliaOceania: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/Australia%2C%20Papua%20New%20Guinea%2C%20New%20Zealand");
    return await response.json();
  },
};

export default api;
