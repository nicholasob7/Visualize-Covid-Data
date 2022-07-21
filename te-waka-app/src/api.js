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

  getCountriesTotals: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries?yesterday=null&sort=active");
     return await response.json();

  getPieData: async () => {
    const response = await fetch("https://covid19.mathdro.id/api");
    return await response.json();
  },

  getNzAusData: async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries/new%20zealand%2C%20australia");
    return await response.json();
  },
};

export default api;
